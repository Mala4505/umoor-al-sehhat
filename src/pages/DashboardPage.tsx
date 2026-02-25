import React from 'react';
import { motion } from 'framer-motion';
import {
  UserPlusIcon,
  UsersIcon,
  DownloadIcon,
  HeartPulseIcon,
  LogOutIcon,
  ChevronRightIcon,
  UserRound
} from 'lucide-react';

import { Person, Visit, Screen } from '../types';
import { BMIBadge } from '../components/BMIBadge';

interface DashboardPageProps {
  navigate: (screen: Screen, personId?: string) => void;
  persons: Person[];
  visits: Visit[];
  onLogout: () => void;
  onExport: () => void;
}

function getBMICategory(bmi: number) {
  if (bmi < 18.5) return 'underweight';
  if (bmi < 25) return 'normal';
  if (bmi < 30) return 'overweight';
  return 'obese';
}

export function DashboardPage({
  navigate,
  persons,
  visits,
  onLogout,
  onExport
}: DashboardPageProps) {

  const todayVisits = visits.filter(
    v => new Date(v.date).toDateString() === new Date().toDateString()
  ).length;

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  const recentVisits = [...visits]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  /* ---------- BMI stats ---------- */

  const bmiStats = React.useMemo(() => {
    const stats = {
      underweight: 0,
      normal: 0,
      overweight: 0,
      obese: 0
    };

    visits.forEach(v => {
      const cat = getBMICategory(v.bmi);
      stats[cat]++;
    });

    return stats;
  }, [visits]);

  const totalBMI = visits.length || 1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-full bg-slate-50"
    >

      <div className="max-w-sm mx-auto px-4 pb-10">

        {/* Header */}
        <div className="flex items-center justify-between pt-12 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-600 flex items-center justify-center shadow-sm">
              <HeartPulseIcon className="w-5 h-5 text-white" strokeWidth={1.5}/>
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
            className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center"
          >
            <LogOutIcon className="w-4 h-4 text-slate-500"/>
          </button>
        </div>

        {/* Top Summary Cards */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <StatCard value={persons.length} label="Total Persons" color="text-teal-600"/>
          <StatCard value={todayVisits} label="Today's Visits" color="text-teal-600"/>
        </div>

        {/* BMI Distribution Panel */}
        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm mb-5">
          <p className="text-xs font-semibold text-slate-400 uppercase mb-3">
            Health Distribution
          </p>

          <BMIRow label="Underweight" value={bmiStats.underweight} total={totalBMI} color="bg-blue-400"/>
          <BMIRow label="Normal" value={bmiStats.normal} total={totalBMI} color="bg-green-500"/>
          <BMIRow label="Overweight" value={bmiStats.overweight} total={totalBMI} color="bg-orange-400"/>
          <BMIRow label="Obese" value={bmiStats.obese} total={totalBMI} color="bg-red-500"/>
        </div>

        {/* Action Cards */}
        <div className="space-y-3 mb-5">

          <ActionCard
            icon={<UserPlusIcon className="w-6 h-6 text-white"/>}
            bg="bg-teal-600"
            title="Add New Entry"
            subtitle="Record health screening data"
            onClick={() => navigate('addEntry')}
          />

          <ActionCard
            icon={<UsersIcon className="w-6 h-6 text-sky-500"/>}
            bg="bg-sky-50"
            title="View Records"
            subtitle="Browse all registered persons"
            onClick={() => navigate('records')}
          />

          <ActionCard
            icon={<DownloadIcon className="w-6 h-6 text-indigo-500"/>}
            bg="bg-indigo-50"
            title="Export Data"
            subtitle="Download CSV or JSON report"
            onClick={onExport}
          />

        </div>

        {/* Recent Activity */}
        {recentVisits.length > 0 && (
          <>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">
              Recent Activity
            </p>

            <div className="space-y-2">
              {recentVisits.map(visit => {
                const person = persons.find(p => p.id === visit.personId);
                if (!person) return null;

                return (
                  <button
                    key={visit.id}
                    onClick={() => navigate('profile', person.id)}
                    className="w-full bg-white rounded-xl px-4 py-3 border border-slate-100 flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center">
                      <UserRound className="w-4 h-4 text-teal-500"/>
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

                    <BMIBadge bmi={visit.bmi} size="sm"/>
                  </button>
                );
              })}
            </div>
          </>
        )}

      </div>
    </motion.div>
  );
}

/* ---------- UI Pieces ---------- */

function StatCard({ value, label, color }:{
  value:number; label:string; color:string;
}) {
  return (
    <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
      <p className={`text-3xl font-bold ${color}`}>{value}</p>
      <p className="text-xs text-slate-400 mt-0.5 font-medium">{label}</p>
    </div>
  );
}

function BMIRow({
  label,
  value,
  total,
  color
}:{
  label:string;
  value:number;
  total:number;
  color:string;
}) {

  const percent = Math.round((value / total) * 100);

  return (
    <div className="mb-3 last:mb-0">

      <div className="flex justify-between text-xs mb-1">
        <span className="text-slate-500">{label}</span>
        <span className="font-semibold text-slate-700">
          {value} ({percent}%)
        </span>
      </div>

      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full transition-all`}
          style={{ width: `${percent}%` }}
        />
      </div>

    </div>
  );
}

function ActionCard({
  icon, bg, title, subtitle, onClick
}:{
  icon:React.ReactNode;
  bg:string;
  title:string;
  subtitle:string;
  onClick:()=>void;
}) {

  const isPrimary = bg.includes('teal-600');

  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity:0, y:12 }}
      animate={{ opacity:1, y:0 }}
      className={`w-full rounded-2xl p-5 text-left border shadow-sm
      ${isPrimary ? 'bg-teal-600 text-white border-none' : 'bg-white border-slate-100'}`}
    >
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${bg}`}>
          {icon}
        </div>

        <div className="flex-1">
          <h2 className={`text-base font-bold ${isPrimary ? 'text-white' : 'text-slate-800'}`}>
            {title}
          </h2>
          <p className={`text-xs mt-0.5 ${isPrimary ? 'text-teal-100' : 'text-slate-400'}`}>
            {subtitle}
          </p>
        </div>

        <ChevronRightIcon className={`w-5 h-5 ${isPrimary ? 'text-white/50' : 'text-slate-300'}`}/>
      </div>
    </motion.button>
  );
}