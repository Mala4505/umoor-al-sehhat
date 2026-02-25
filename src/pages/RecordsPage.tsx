import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeftIcon,
  SearchIcon,
  ChevronRightIcon,
  UserPlusIcon,
  UserRound } from
'lucide-react';
import { Person, Visit, Screen } from '../types';
import { BMIBadge } from '../components/BMIBadge';
interface RecordsPageProps {
  navigate: (screen: Screen, personId?: string) => void;
  persons: Person[];
  visits: Visit[];
}
export function RecordsPage({ navigate, persons, visits }: RecordsPageProps) {
  const [search, setSearch] = useState('');
  const filtered = persons.filter((p) =>
  p.id.toLowerCase().includes(search.toLowerCase())
  );
  const getLatestVisit = (personId: string): Visit | undefined => {
    return visits.
    filter((v) => v.personId === personId).
    sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )[0];
  };
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

      <div className="max-w-sm mx-auto px-4 pb-10">
        {/* Header */}
        <div className="flex items-center gap-3 pt-12 pb-6">
          <button
            onClick={() => navigate('dashboard')}
            className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center active:bg-slate-50 transition-colors"
            aria-label="Go back">

            <ArrowLeftIcon className="w-4 h-4 text-slate-600" />
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-bold text-slate-800">Records</h1>
            <p className="text-xs text-slate-400">
              {persons.length} {persons.length === 1 ? 'person' : 'persons'}{' '}
              registered
            </p>
          </div>
          <button
            onClick={() => navigate('addEntry')}
            className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center shadow-sm active:bg-teal-700 transition-colors"
            aria-label="Add new entry">

            <UserPlusIcon className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-5">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="number"
            inputMode="numeric"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by ITS number…"
            className="w-full h-12 rounded-full pl-11 pr-5 bg-white border border-slate-200 text-slate-800 text-base placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all shadow-sm font-mono" />

        </div>

        {/* List */}
        {filtered.length === 0 ?
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          className="text-center py-16">

            <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mx-auto mb-4">
              <UserRound className="w-8 h-8 text-teal-400" />
            </div>
            <p className="text-slate-700 font-semibold">
              {search ? 'No records found' : 'No records yet'}
            </p>
            <p className="text-slate-400 text-sm mt-1">
              {search ?
            'Try a different ITS number' :
            'Add your first entry to get started'}
            </p>
            {!search &&
          <button
            onClick={() => navigate('addEntry')}
            className="mt-4 rounded-full bg-teal-600 text-white px-6 py-2.5 text-sm font-semibold active:bg-teal-700 transition-colors">

                Add Entry
              </button>
          }
          </motion.div> :

        <div className="space-y-3">
            {filtered.map((person, index) => {
            const latestVisit = getLatestVisit(person.id);
            const visitCount = visits.filter(
              (v) => v.personId === person.id
            ).length;
            return (
              <motion.button
                key={person.id}
                initial={{
                  opacity: 0,
                  y: 10
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  delay: index * 0.04
                }}
                onClick={() => navigate('profile', person.id)}
                className="w-full bg-white rounded-2xl p-4 border border-slate-100 shadow-sm active:bg-slate-50 transition-all text-left">

                  <div className="flex items-center gap-3">
                    {/* ITS Avatar */}
                    <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <UserRound className="w-5 h-5 text-teal-500" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-slate-800 font-mono tracking-wide">
                        {person.id}
                      </p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs text-slate-400 capitalize">
                          {/* {person.gender === 'Male' ? '♂' : '♀'}{' '} */}
                          {person.gender}
                        </span>
                        <span className="text-slate-300">·</span>
                        <span className="text-xs text-slate-400">
                          {person.age} yrs
                        </span>
                        {/* <span className="text-slate-300">·</span>
                        <span className="text-xs text-slate-400">
                          {visitCount} {visitCount === 1 ? 'visit' : 'visits'}
                        </span> */}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      {latestVisit &&
                    <BMIBadge bmi={latestVisit.bmi} size="sm" />
                    }
                      <ChevronRightIcon className="w-4 h-4 text-slate-300" />
                    </div>
                  </div>

                  {latestVisit &&
                <div className="mt-3 pt-3 border-t border-slate-50 flex items-center justify-between">
                      <span className="text-xs text-slate-400">
                        Last visit:{' '}
                        {new Date(latestVisit.date).toLocaleDateString(
                      'en-US',
                      {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      }
                    )}
                      </span>
                      <span className="text-xs text-slate-400">
                        {latestVisit.height}cm · {latestVisit.weight}kg
                      </span>
                    </div>
                }
                </motion.button>);

          })}
          </div>
        }
      </div>
    </motion.div>);

}