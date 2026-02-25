import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeftIcon,
  CheckIcon,
  UserIcon,
  ActivityIcon,
  HeartIcon,
  DropletIcon,
  StickyNoteIcon,
  SearchIcon,
  UserCheckIcon,
  UserPlusIcon
} from
  'lucide-react';
import { Person, Visit, Screen, calculateBMI, getBMICategory } from '../types';
import { BMIBadge } from '../components/BMIBadge';
import { personsApi } from '../api/personsApi';

interface AddEntryPageProps {
  navigate: (screen: Screen, personId?: string) => void;
  onAddPerson: (person: Person) => Promise<void>;
  onAddVisit: (visit: Visit) => Promise<void>;
  persons: Person[];
  showToast: (message: string, type: 'success' | 'error') => void;
}

function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

type SugarType = 'fasting' | 'random' | 'post-meal';

export function AddEntryPage({
  navigate,
  onAddPerson,
  onAddVisit,
  persons,
  showToast
}: AddEntryPageProps) {
  // ITS lookup
  const [itsInput, setItsInput] = useState('');
  const [existingPerson, setExistingPerson] = useState<Person | null>(null);
  const [isNewPerson, setIsNewPerson] = useState<boolean | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  // New person demographics
  const [gender, setGender] = useState<'Male' | 'Female'>('Male');
  const [age, setAge] = useState('');

  // Visit measurements
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [sugarValue, setSugarValue] = useState('');
  const [sugarType, setSugarType] = useState<SugarType>('fasting');
  const [notes, setNotes] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  // Auto-detect ITS on input
  useEffect(() => {
    const trimmed = itsInput.trim();
    if (trimmed.length >= 8) { // Assuming 8-digit ITS
      const lookupITS = async () => {
        setIsSearching(true);
        try {
          // Check local first
          const localMatch = persons.find(p => p.id === trimmed);
          if (localMatch) {
            setExistingPerson(localMatch);
            setIsNewPerson(false);
          } else {
            // Check API
            const remoteMatch = await personsApi.findPersonByITS(trimmed);
            if (remoteMatch) {
              setExistingPerson(remoteMatch);
              setIsNewPerson(false);
            } else {
              setExistingPerson(null);
              setIsNewPerson(true);
            }
          }
        } catch (error) {
          console.error('Error looking up ITS:', error);
          // Fallback to "new person" mode on error or assume new?
          setIsNewPerson(true);
        } finally {
          setIsSearching(false);
        }
      };
      lookupITS();
    } else {
      setExistingPerson(null);
      setIsNewPerson(null);
    }
  }, [itsInput, persons]);

  const bmi =
    height && weight ? calculateBMI(Number(height), Number(weight)) : null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedIts = itsInput.trim();

    if (!trimmedIts) {
      showToast('Please enter an ITS number', 'error');
      return;
    }

    if (isNewPerson && !age) {
      showToast('Please enter age for new person', 'error');
      return;
    }

    if (!height || !weight) {
      showToast('Height and weight are required', 'error');
      return;
    }

    setIsSaving(true);
    try {
      if (isNewPerson) {
        const newPerson: Person = {
          id: trimmedIts,
          gender,
          age: Number(age)
        };
        await onAddPerson(newPerson);
      }

      const computedBmi = calculateBMI(Number(height), Number(weight));
      const newVisit: Visit = {
        id: generateId(), // VisistApi will replace with DB UUID
        personId: trimmedIts,
        date: new Date().toISOString(),
        height: Number(height),
        weight: Number(weight),
        bmi: computedBmi,
        bmiCategory: getBMICategory(computedBmi),
        systolic: systolic ? Number(systolic) : undefined,
        diastolic: diastolic ? Number(diastolic) : undefined,
        sugarValue: sugarValue ? Number(sugarValue) : undefined,
        sugarType: sugarValue ? sugarType : undefined,
        notes: notes.trim() || undefined
      };

      await onAddVisit(newVisit);
      showToast('Entry saved successfully!', 'success');
      navigate('records');
    } catch (error) {
      console.error('Save failed:', error);
      showToast('Failed to save entry', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const sugarTypeOptions: {
    value: SugarType;
    label: string;
  }[] = [
      {
        value: 'fasting',
        label: 'Fasting'
      },
      {
        value: 'random',
        label: 'Random'
      },
      {
        value: 'post-meal',
        label: 'Post-Meal'
      }];

  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 0
      }}
      transition={{
        duration: 0.25
      }}
      className="min-h-screen w-full bg-slate-50">

      <div className="max-w-sm mx-auto px-4 pb-32">
        {/* Header */}
        <div className="flex items-center gap-3 pt-12 pb-6">
          <button
            onClick={() => navigate('dashboard')}
            className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center active:bg-slate-50 transition-colors"
            aria-label="Go back">

            <ArrowLeftIcon className="w-4 h-4 text-slate-600" />
          </button>
          <div>
            <h1 className="text-lg font-bold text-slate-800">Add Entry</h1>
            <p className="text-xs text-slate-400">Record health screening</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* ── SECTION 1: ITS Number ── */}
          <SectionCard
            icon={isSearching ? <div className="animate-spin w-4 h-4 border-2 border-teal-600 border-t-transparent rounded-full" /> : <SearchIcon className="w-4 h-4 text-teal-600" />}
            iconBg="bg-teal-50"
            label="ITS Number">

            <input
              type="number"
              inputMode="numeric"
              value={itsInput}
              onChange={(e) => setItsInput(e.target.value)}
              placeholder="ITS Number"
              className="w-full h-12 rounded-xl px-4 bg-slate-50 border border-slate-200 text-slate-800 text-base placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all font-mono tracking-wider"
              required />


            {/* Auto-detected person status */}
            <AnimatePresence>
              {isNewPerson === false && existingPerson &&
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -8,
                    scale: 0.97
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                    scale: 0.97
                  }}
                  transition={{
                    duration: 0.2
                  }}
                  className="mt-3 flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">

                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <UserCheckIcon className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">
                      Existing Person
                    </p>
                    <p className="text-sm font-medium text-emerald-800 mt-0.5">
                      ITS {existingPerson.id} ·{' '}
                      {existingPerson.gender === 'Male' ? 'Male' : 'Female'},{' '}
                      {existingPerson.age} yrs
                    </p>
                  </div>
                  <CheckIcon className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                </motion.div>
              }

              {isNewPerson === true &&
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -8,
                    scale: 0.97
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                    scale: 0.97
                  }}
                  transition={{
                    duration: 0.2
                  }}
                  className="mt-3 flex items-start gap-3 bg-sky-50 border border-sky-200 rounded-xl px-4 py-3">

                  <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <UserPlusIcon className="w-4 h-4 text-sky-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-sky-700 uppercase tracking-wide">
                      New Person
                    </p>
                    <p className="text-xs text-sky-600 mt-0.5">
                      Fill in demographics below
                    </p>
                  </div>
                </motion.div>
              }
            </AnimatePresence>
          </SectionCard>

          {/* ── SECTION 2: Demographics (only for new person) ── */}
          <AnimatePresence>
            {isNewPerson === true &&
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0
                }}
                animate={{
                  opacity: 1,
                  height: 'auto'
                }}
                exit={{
                  opacity: 0,
                  height: 0
                }}
                transition={{
                  duration: 0.25
                }}
                style={{
                  overflow: 'hidden'
                }}>

                <SectionCard
                  icon={<UserIcon className="w-4 h-4 text-sky-600" />}
                  iconBg="bg-sky-50"
                  label="Demographics">

                  {/* Gender toggle */}
                  <div className="mb-3">
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Gender
                    </label>
                    <div className="flex gap-2">
                      {(['Male', 'Female'] as const).map((g) =>
                        <button
                          key={g}
                          type="button"
                          onClick={() => setGender(g)}
                          className={`flex-1 h-11 rounded-xl text-sm font-semibold transition-all ${gender === g ? 'bg-sky-500 text-white shadow-sm' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}>

                          {g === 'Male' ? '♂ Male' : '♀ Female'}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Age */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Age
                    </label>
                    <input
                      type="number"
                      inputMode="numeric"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      // placeholder="e.g. 35"
                      min="1"
                      max="120"
                      className="w-full h-12 rounded-xl px-4 bg-slate-50 border border-slate-200 text-slate-800 text-base placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-all"
                      required={isNewPerson} />

                  </div>
                </SectionCard>
              </motion.div>
            }
          </AnimatePresence>

          {/* ── SECTION 3: Body Metrics ── */}
          <SectionCard
            icon={<ActivityIcon className="w-4 h-4 text-teal-600" />}
            iconBg="bg-teal-50"
            label="Body Metrics">

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                  Height (cm)
                </label>
                <input
                  type="number"
                  inputMode="decimal"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="170"
                  min="50"
                  max="250"
                  className="w-full h-12 rounded-xl px-4 bg-slate-50 border border-slate-200 text-slate-800 text-base placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                  required />

              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  inputMode="decimal"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="70"
                  min="10"
                  max="300"
                  step="0.1"
                  className="w-full h-12 rounded-xl px-4 bg-slate-50 border border-slate-200 text-slate-800 text-base placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                  required />

              </div>
            </div>

            {/* Live BMI */}
            <AnimatePresence>
              {bmi !== null &&
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.96
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.96
                  }}
                  transition={{
                    duration: 0.2
                  }}
                  className="flex items-center justify-between bg-teal-50 border border-teal-100 rounded-xl px-4 py-3">

                  <div>
                    <p className="text-xs font-semibold text-teal-600 uppercase tracking-wide">
                      BMI (auto)
                    </p>
                    <p className="text-2xl font-bold text-teal-700 mt-0.5 leading-none">
                      {bmi.toFixed(1)}
                    </p>
                  </div>
                  <BMIBadge bmi={bmi} size="sm" />
                </motion.div>
              }
            </AnimatePresence>
          </SectionCard>

          {/* ── SECTION 4: Blood Pressure ── */}
          <SectionCard
            icon={<HeartIcon className="w-4 h-4 text-rose-500" />}
            iconBg="bg-rose-50"
            label="Blood Pressure"
            optional>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                  Systolic
                </label>
                <div className="relative">
                  <input
                    type="number"
                    inputMode="numeric"
                    value={systolic}
                    onChange={(e) => setSystolic(e.target.value)}
                    placeholder="120"
                    min="60"
                    max="250"
                    className="w-full h-12 rounded-xl px-4 pr-14 bg-slate-50 border border-slate-200 text-slate-800 text-base placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400 transition-all" />

                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-medium">
                    mmHg
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1 pl-1">Upper number</p>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                  Diastolic
                </label>
                <div className="relative">
                  <input
                    type="number"
                    inputMode="numeric"
                    value={diastolic}
                    onChange={(e) => setDiastolic(e.target.value)}
                    placeholder="80"
                    min="40"
                    max="150"
                    className="w-full h-12 rounded-xl px-4 pr-14 bg-slate-50 border border-slate-200 text-slate-800 text-base placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400 transition-all" />

                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-medium">
                    mmHg
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1 pl-1">Lower number</p>
              </div>
            </div>

            {/* Combined BP preview */}
            {systolic && diastolic &&
              <motion.div
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1
                }}
                className="mt-3 text-center bg-rose-50 border border-rose-100 rounded-xl py-2.5">

                <span className="text-lg font-bold text-rose-600">
                  {systolic}/{diastolic}
                </span>
                <span className="text-xs text-rose-400 ml-1.5">mmHg</span>
              </motion.div>
            }
          </SectionCard>

          {/* ── SECTION 5: Blood Sugar ── */}
          <SectionCard
            icon={<DropletIcon className="w-4 h-4 text-amber-500" />}
            iconBg="bg-amber-50"
            label="Blood Sugar"
            optional>

            <div className="mb-3">
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                Reading (mg/dL)
              </label>
              <input
                type="number"
                inputMode="decimal"
                value={sugarValue}
                onChange={(e) => setSugarValue(e.target.value)}
                // placeholder="e.g. 95"
                min="0"
                className="w-full h-12 rounded-xl px-4 bg-slate-50 border border-slate-200 text-slate-800 text-base placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all" />

            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                Type
              </label>
              <div className="flex gap-2">
                {sugarTypeOptions.map((opt) =>
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setSugarType(opt.value)}
                    className={`flex-1 h-10 rounded-xl text-xs font-semibold transition-all ${sugarType === opt.value ? 'bg-amber-400 text-white shadow-sm' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}>

                    {opt.label}
                  </button>
                )}
              </div>
            </div>
          </SectionCard>

          {/* ── SECTION 6: Notes ── */}
          <SectionCard
            icon={<StickyNoteIcon className="w-4 h-4 text-slate-500" />}
            iconBg="bg-slate-100"
            label="Notes"
            optional>

            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any observations, referrals, or follow-up notes…"
              rows={3}
              className="w-full rounded-xl px-4 py-3 bg-slate-50 border border-slate-200 text-slate-800 text-base placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all resize-none" />

          </SectionCard>
        </form>
      </div>

      {/* Fixed Save Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-100 px-4 py-4 z-20">
        <div className="max-w-sm mx-auto">
          <button
            onClick={handleSubmit}
            disabled={isSaving || isSearching || !itsInput.trim() || !height || !weight}
            className="w-full h-14 rounded-2xl bg-teal-600 hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-base transition-all shadow-lg shadow-teal-200 flex items-center justify-center gap-2">

            {isSaving ?
              <>
                <svg
                  className="animate-spin w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none">

                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4" />

                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />

                </svg>
                Saving…
              </> :

              <>
                <CheckIcon className="w-5 h-5" strokeWidth={2.5} />
                Save Entry
              </>
            }
          </button>
        </div>
      </div>
    </motion.div>);

}
function SectionCard({
  icon,
  iconBg,
  label,
  optional = false,
  children
}: { icon: React.ReactNode; iconBg: string; label: string; optional?: boolean; children: React.ReactNode; }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="flex items-center gap-2.5 px-4 py-3 border-b border-slate-50">
        <div
          className={`w-7 h-7 rounded-lg ${iconBg} flex items-center justify-center`}>

          {icon}
        </div>
        <span className="text-sm font-semibold text-slate-700">{label}</span>
        {optional &&
          <span className="ml-auto text-xs text-slate-400 font-medium">
            Optional
          </span>
        }
      </div>
      <div className="px-4 py-4">{children}</div>
    </div>);

}