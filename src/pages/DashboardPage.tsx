import React from 'react';
import { motion } from 'framer-motion';
import {
  UserPlusIcon,
  UsersIcon,
  DownloadIcon,
  HeartPulseIcon,
  LogOutIcon,
  ChevronRightIcon,
  UserRound } from
'lucide-react';
import { Person, Visit, Screen } from '../types';
import { BMIBadge } from '../components/BMIBadge';
interface DashboardPageProps {
  navigate: (screen: Screen, personId?: string) => void;
  persons: Person[];
  visits: Visit[];
  onLogout: () => void;
  onExport: () => void;
}
export function DashboardPage({
  navigate,
  persons,
  visits,
  onLogout,
  onExport
}: DashboardPageProps) {
  const todayVisits = visits.filter(
    (v) => new Date(v.date).toDateString() === new Date().toDateString()
  ).length;
  const recentVisits = [...visits].
  sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).
  slice(0, 3);
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });
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
        <div className="flex items-center justify-between pt-12 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-600 flex items-center justify-center shadow-sm">
              <HeartPulseIcon
                className="w-5 h-5 text-white"
                strokeWidth={1.5} />

            </div>
            <div>
              <h1 className="text-base font-bold text-slate-800 leading-tight">
                Umoor Al-Sehhat
              </h1>
              <p className="text-xs text-slate-400">{today}</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center active:bg-slate-50 transition-colors"
            aria-label="Sign out">

            <LogOutIcon className="w-4 h-4 text-slate-500" />
          </button>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.08
          }}
          className="grid grid-cols-2 gap-3 mb-5">

          <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
            <p className="text-3xl font-bold text-teal-600">{persons.length}</p>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">
              Total Persons
            </p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
            <p className="text-3xl font-bold text-teal-600">{todayVisits}</p>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">
              Today's Visits
            </p>
          </div>
        </motion.div>

        {/* Action Cards */}
        <div className="space-y-3 mb-5">
          <motion.button
            initial={{
              opacity: 0,
              y: 12
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.12
            }}
            onClick={() => navigate('addEntry')}
            className="w-full bg-teal-600 rounded-2xl p-5 text-left shadow-md shadow-teal-100 active:bg-teal-700 transition-colors">

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <UserPlusIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-base font-bold text-white">
                  Add New Entry
                </h2>
                <p className="text-teal-100 text-xs mt-0.5">
                  Record health screening data
                </p>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-white/50" />
            </div>
          </motion.button>

          <motion.button
            initial={{
              opacity: 0,
              y: 12
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.17
            }}
            onClick={() => navigate('records')}
            className="w-full bg-white rounded-2xl p-5 text-left border border-slate-100 shadow-sm active:bg-slate-50 transition-all">

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center flex-shrink-0">
                <UsersIcon className="w-6 h-6 text-sky-500" />
              </div>
              <div className="flex-1">
                <h2 className="text-base font-bold text-slate-800">
                  View Records
                </h2>
                <p className="text-slate-400 text-xs mt-0.5">
                  Browse all registered persons
                </p>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-slate-300" />
            </div>
          </motion.button>

          <motion.button
            initial={{
              opacity: 0,
              y: 12
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.22
            }}
            onClick={onExport}
            className="w-full bg-white rounded-2xl p-5 text-left border border-slate-100 shadow-sm active:bg-slate-50 transition-all">

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                <DownloadIcon className="w-6 h-6 text-indigo-500" />
              </div>
              <div className="flex-1">
                <h2 className="text-base font-bold text-slate-800">
                  Export Data
                </h2>
                <p className="text-slate-400 text-xs mt-0.5">
                  Download CSV or JSON report
                </p>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-slate-300" />
            </div>
          </motion.button>
        </div>

        {/* Recent Activity */}
        {recentVisits.length > 0 &&
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 0.3
          }}>

            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">
              Recent Activity
            </p>
            <div className="space-y-2">
              {recentVisits.map((visit) => {
              const person = persons.find((p) => p.id === visit.personId);
              if (!person) return null;
              return (
                <button
                  key={visit.id}
                  onClick={() => navigate('profile', person.id)}
                  className="w-full bg-white rounded-xl px-4 py-3 border border-slate-100 flex items-center gap-3 active:bg-slate-50 transition-colors text-left">

                    <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <UserRound className="w-4 h-4 text-teal-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-slate-700 font-mono">
                        {person.id}
                      </p>
                      <p className="text-xs text-slate-400">
                        {new Date(visit.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                      })}
                      </p>
                    </div>
                    <BMIBadge bmi={visit.bmi} size="sm" />
                  </button>);

            })}
            </div>
          </motion.div>
        }
      </div>
    </motion.div>);

}