import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeftIcon,
  PlusIcon,
  TrashIcon,
  ActivityIcon,
  DropletIcon,
  HeartIcon,
  UserRound,
  CalendarIcon,
  StickyNoteIcon
} from 'lucide-react';
import { DateTime } from 'luxon';   // ✅ Luxon for timezone handling
import { Person, Visit, Screen } from '../types';
import { BMIBadge } from '../components/BMIBadge';

interface PersonProfilePageProps {
  navigate: (screen: Screen, personId?: string) => void;
  person: Person | null;
  visits: Visit[];
  onDeleteVisit: (visitId: string) => void;
  showToast: (message: string, type: 'success' | 'error') => void;
}

export function PersonProfilePage({
  navigate,
  person,
  visits,
  onDeleteVisit,
  showToast
}: PersonProfilePageProps) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);

  if (!person) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-slate-400">Person not found</p>
      </div>
    );
  }

  /* ---------- Timezone-safe sorting ---------- */
  const personVisits = visits
    .filter((v) => v.personId === person.id)
    .sort(
      (a, b) =>
        DateTime.fromISO(b.date, { zone: 'utc' }).toMillis() -
        DateTime.fromISO(a.date, { zone: 'utc' }).toMillis()
    );

  const latestVisit = personVisits[0];

  const avgBMI = personVisits.length
    ? personVisits.reduce((s, v) => s + v.bmi, 0) / personVisits.length
    : null;

  const avgSystolic = personVisits.filter((v) => v.systolic).length
    ? personVisits.filter((v) => v.systolic).reduce((s, v) => s + (v.systolic ?? 0), 0) /
    personVisits.filter((v) => v.systolic).length
    : null;

  const avgDiastolic = personVisits.filter((v) => v.diastolic).length
    ? personVisits.filter((v) => v.diastolic).reduce((s, v) => s + (v.diastolic ?? 0), 0) /
    personVisits.filter((v) => v.diastolic).length
    : null;

  const avgSugar = personVisits.filter((v) => v.sugarValue).length
    ? personVisits.filter((v) => v.sugarValue).reduce((s, v) => s + (v.sugarValue ?? 0), 0) /
    personVisits.filter((v) => v.sugarValue).length
    : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="min-h-screen w-full bg-slate-50"
    >
      <div className="max-w-sm mx-auto px-4 pb-28">
        {/* Header */}
        <div className="flex items-center justify-between pt-12 pb-6">
          <button
            onClick={() => navigate('records')}
            className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center active:bg-slate-50 transition-colors"
            aria-label="Go back"
          >
            <ArrowLeftIcon className="w-4 h-4 text-slate-600" />
          </button>
        </div>

        {/* Person Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm mb-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center flex-shrink-0">
              <UserRound className="w-7 h-7 text-teal-500" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">
                ITS Number
              </p>
              <p className="text-xl font-bold text-slate-800 font-mono tracking-wider">
                {person.id}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full capitalize">
                  {person.gender === 'Male' ? '♂' : '♀'} {person.gender}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                  {person.age} yrs
                </span>
              </div>
            </div>
          </div>

          {latestVisit && (
            <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 mb-1">Latest BMI</p>
                <BMIBadge bmi={latestVisit.bmi} size="md" />
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-400 mb-1">Last Visit</p>
                <p className="text-sm font-semibold text-slate-600">
                  {DateTime.fromISO(latestVisit.date, { zone: 'utc' })
                    .setZone('Asia/Kuwait')
                    .toLocaleString({ month: 'short', day: 'numeric', year: 'numeric' })}
                </p>
              </div>
            </div>
          )}
        </motion.div>

        {/* Summary Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 gap-3 mb-4"
        >
          <MetricCard
            icon={<ActivityIcon className="w-4 h-4 text-teal-600" />}
            iconBg="bg-teal-50"
            label="Avg BMI"
            value={avgBMI !== null ? avgBMI.toFixed(1) : '—'}
          />

          <MetricCard
            icon={<HeartIcon className="w-4 h-4 text-rose-500" />}
            iconBg="bg-rose-50"
            label="Avg BP"
            value={
              avgSystolic && avgDiastolic
                ? `${Math.round(avgSystolic)}/${Math.round(avgDiastolic)}`
                : '—'
            }
            unit={avgSystolic ? 'mmHg' : undefined}
          />

          <MetricCard
            icon={<DropletIcon className="w-4 h-4 text-amber-500" />}
            iconBg="bg-amber-50"
            label="Avg Sugar"
            value={avgSugar !== null ? Math.round(avgSugar).toString() : '—'}
            unit={avgSugar ? 'mg/dL' : undefined}
          />

          <MetricCard
            icon={<CalendarIcon className="w-4 h-4 text-indigo-500" />}
            iconBg="bg-indigo-50"
            label="Total Visits"
            value={personVisits.length.toString()}
          />
        </motion.div>

        {/* Visit History */}
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">
            Visit History
          </p>

          {personVisits.length === 0 ? (
            <div className="text-center py-10 bg-white rounded-2xl border border-slate-100">
              <ActivityIcon className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <p className="text-slate-400 text-sm">No visits recorded yet</p>
            </div>
          ) : (
            <div className="space-y-3">
              {personVisits.map((visit, index) => (
                <motion.div
                  key={visit.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + index * 0.05 }}
                  className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm"
                >
                  {/* Visit header */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-700">
                        {DateTime.fromISO(visit.date, { zone: 'utc' })
                          .setZone('Asia/Kuwait')
                          .toLocaleString({
                            weekday: 'short',
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {DateTime.fromISO(visit.date, { zone: 'utc' })
                          .setZone('Asia/Kuwait')
                          .toLocaleString({
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        {index === 0 && (
                          <span className="ml-2 text-teal-600 font-semibold">· Latest</span>
                        )}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <BMIBadge bmi={visit.bmi} size="sm" />
                      <button
                        onClick={() => setShowDeleteConfirm(visit.id)}
                        className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center active:bg-red-100 transition-colors"
                        aria-label="Delete visit"
                      >
                        <TrashIcon className="w-3.5 h-3.5 text-red-400" />
                      </button>
                    </div>
                  </div>

                  {/* Body metrics row */}
                  <div className="grid grid-cols-3 gap-2 mb-2">
                    <MiniMetric label="Height" value={`${visit.height}`} unit="cm" />
                    <MiniMetric label="Weight" value={`${visit.weight}`} unit="kg" />
                    <MiniMetric label="BMI" value={visit.bmi.toFixed(1)} />
                  </div>

                  {/* BP + Sugar badges */}
                  {(visit.systolic || visit.sugarValue) && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {visit.systolic && visit.diastolic && (
                        <span className="text-xs bg-rose-50 text-rose-600 px-2.5 py-1 rounded-full font-medium">
                          ♥ {visit.systolic}/{visit.diastolic} mmHg
                        </span>
                      )}
                      {visit.sugarValue && (
                        <span className="text-xs bg-amber-50 text-amber-600 px-2.5 py-1 rounded-full font-medium capitalize">
                          ◉ {visit.sugarValue} mg/dL
                          {visit.sugarType && ` · ${visit.sugarType}`}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Notes */}
                  {visit.notes && (
                    <div className="mt-2 flex items-start gap-1.5 pt-2 border-t border-slate-50">
                      <StickyNoteIcon className="w-3 h-3 text-slate-400 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-slate-500 italic">{visit.notes}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Floating Add Visit Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 0.3,
          type: 'spring',
          stiffness: 400,
          damping: 25
        }}
        onClick={() => navigate('addEntry')}
        className="fixed bottom-6 right-4 w-14 h-14 rounded-full bg-teal-600 shadow-lg shadow-teal-200 flex items-center justify-center active:bg-teal-700 transition-colors z-30"
        style={{
          right: 'max(1rem, calc(50% - 176px))'
        }}
        aria-label="Add new visit"
      >
        <PlusIcon className="w-6 h-6 text-white" strokeWidth={2.5} />
      </motion.button>

      {/* Delete Confirmation Sheet */}
      <AnimatePresence>
        {showDeleteConfirm && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setShowDeleteConfirm(null)}
            />

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm z-50 px-4 pb-6"
            >
              <div className="bg-white rounded-3xl p-6 shadow-2xl">
                <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-4">
                  <TrashIcon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 text-center">Delete Visit?</h3>
                <p className="text-sm text-slate-500 text-center mt-2 mb-6">
                  This will permanently delete this visit record.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowDeleteConfirm(null)}
                    className="flex-1 rounded-full py-3 border border-slate-200 text-slate-600 font-semibold active:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      if (showDeleteConfirm) {
                        onDeleteVisit(showDeleteConfirm);
                        setShowDeleteConfirm(null);
                        showToast('Visit deleted', 'success');
                      }
                    }}
                    className="flex-1 rounded-full py-3 bg-red-500 active:bg-red-600 text-white font-semibold transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ---------- Supporting Components ---------- */

function MetricCard({
  icon,
  iconBg,
  label,
  value,
  unit
}: {
  icon: React.ReactNode;
  iconBg: string;
  label: string;
  value: string;
  unit?: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <div className={`w-7 h-7 rounded-lg ${iconBg} flex items-center justify-center`}>{icon}</div>
        <p className="text-xs text-slate-400 font-medium">{label}</p>
      </div>
      <p className="text-lg font-bold text-slate-800 leading-none">
        {value}
        {unit && <span className="text-xs font-normal text-slate-400 ml-1">{unit}</span>}
      </p>
    </div>
  );
}

function MiniMetric({ label, value, unit }: { label: string; value: string; unit?: string }) {
  return (
    <div className="text-center bg-slate-50 rounded-xl py-2">
      <p className="text-xs text-slate-400">{label}</p>
      <p className="text-sm font-bold text-slate-700">
        {value}
        {unit && <span className="text-xs font-normal text-slate-400">{unit}</span>}
      </p>
    </div>
  );
}
