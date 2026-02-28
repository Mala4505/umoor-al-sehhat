// StatisticsPage.tsx
import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowLeftIcon
} from 'lucide-react';
import { visitsApi } from '../api/visitsApi';
import { Person, Visit, Screen } from '../types';
import { Pagination } from '../components/Pagination';

interface StatisticsPageProps {
    navigate: (screen: Screen, personId?: string) => void;
    persons: Person[];
    visits: Visit[];
}

// Reusable Metric Card
interface MetricCardProps {
    label: string;
    value: string | number;
    unit?: string;
    color?: string;
    miniBar?: number; // optional bar fill (0–100)
}
const MetricCard = ({ label, value, unit, color = 'bg-teal-400', miniBar }: MetricCardProps) => (
    <motion.div layout className="p-4 rounded-2xl shadow-md bg-white flex flex-col gap-2">
        <div className="text-sm text-slate-500">{label}</div>
        <div className={`text-xl font-bold ${color}`}>{value}{unit}</div>
        {miniBar !== undefined && (
            <div className="w-full h-2 bg-slate-200 rounded-full mt-1">
                <div className={`${color} h-2 rounded-full`} style={{ width: `${miniBar}%` }} />
            </div>
        )}
    </motion.div>
);

export function StatisticsPage({ navigate, persons, visits }: StatisticsPageProps) {
    const [newVisits, setNewVisits] = useState<(Visit & { gender: string; age: number })[]>([]);
    const [filters, setFilters] = useState({ gender: 'All', knownCondition: 'All' });
    const [page, setPage] = useState(1);
    const pageSize = 10;

    useEffect(() => {
        async function fetchVisits() {
            const data = await visitsApi.getAllVisits();
            setNewVisits(data);
        }
        fetchVisits();
    }, []);

    // Reset scroll to top whenever page changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [page, filters]);

    // Filter participants
    const participants = useMemo(() => {
        let filtered = [...newVisits];
        if (filters.gender !== 'All') filtered = filtered.filter(v => v.gender === filters.gender);
        if (filters.knownCondition !== 'All')
            filtered = filtered.filter(v => v.knownConditions.includes(filters.knownCondition));
        return filtered;
    }, [newVisits, filters]);

    const total = participants.length;
    const totalPages = Math.ceil(total / pageSize);

    const currentData = participants.slice((page - 1) * pageSize, page * pageSize);

    // BMI counts
    const bmiCounts = useMemo(() => {
        const counts = { Underweight: 0, Normal: 0, Overweight: 0, Obese: 0 };
        participants.forEach(v => counts[v.bmiCategory]++);
        return counts;
    }, [participants]);

    const highBPCount = participants.filter(v => (v.systolic ?? 0) >= 140 || (v.diastolic ?? 0) >= 90).length;
    const highSugarCount = participants.filter(v => (v.sugarValue ?? 0) >= 126).length;
    const highRiskCount = participants.filter(v =>
        (v.bmiCategory === 'Overweight' || v.bmiCategory === 'Obese') &&
        ((v.systolic ?? 0) >= 140 || (v.diastolic ?? 0) >= 90 || (v.sugarValue ?? 0) >= 126)
    ).length;

    const knownConditionsList = Array.from(new Set(visits.flatMap(v => v.knownConditions)));

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen w-full bg-slate-50"
        >
            <div className="max-w-sm mx-auto px-4 pb-10">

                {/* Header */}
                <div className="flex items-center gap-3 pt-12 pb-6">
                    <button
                        onClick={() => navigate('dashboard')}
                        className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center active:bg-slate-50 transition-colors"
                    >
                        <ArrowLeftIcon className="w-4 h-4 text-slate-600" />
                    </button>

                    <div className="flex-1">
                        <h1 className="text-lg font-bold text-slate-800">Statistics</h1>
                        <p className="text-xs text-slate-400">{participants.length} participants</p>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-3 mb-4">
                    <select
                        className="p-2 rounded-xl border"
                        value={filters.gender}
                        onChange={e => { setFilters(f => ({ ...f, gender: e.target.value as any })); setPage(1); }}
                    >
                        <option>All</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>

                    <select
                        className="p-2 rounded-xl border"
                        value={filters.knownCondition}
                        onChange={e => { setFilters(f => ({ ...f, knownCondition: e.target.value })); setPage(1); }}
                    >
                        <option>All</option>
                        {knownConditionsList.map(kc => <option key={kc}>{kc}</option>)}
                    </select>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <MetricCard label="Total Participants" value={total} color="text-teal-600" />
                    <MetricCard
                        label="% Normal BMI"
                        value={total ? ((bmiCounts.Normal / total) * 100).toFixed(0) : 0}
                        unit="%"
                        color="text-green-600"
                        miniBar={total ? (bmiCounts.Normal / total) * 100 : 0}
                    />
                    <MetricCard
                        label="% Overweight / Obese"
                        value={total ? (((bmiCounts.Overweight + bmiCounts.Obese) / total) * 100).toFixed(0) : 0}
                        unit="%"
                        color="text-red-600"
                        miniBar={total ? ((bmiCounts.Overweight + bmiCounts.Obese) / total) * 100 : 0}
                    />
                    <MetricCard
                        label="% High BP"
                        value={total ? ((highBPCount / total) * 100).toFixed(0) : 0}
                        unit="%"
                        color="text-rose-500"
                        miniBar={total ? (highBPCount / total) * 100 : 0}
                    />
                    <MetricCard
                        label="% High Sugar"
                        value={total ? ((highSugarCount / total) * 100).toFixed(0) : 0}
                        unit="%"
                        color="text-amber-500"
                        miniBar={total ? (highSugarCount / total) * 100 : 0}
                    />
                    <MetricCard
                        label="% High Risk"
                        value={total ? ((highRiskCount / total) * 100).toFixed(0) : 0}
                        unit="%"
                        color="text-purple-600"
                        miniBar={total ? (highRiskCount / total) * 100 : 0}
                    />
                </div>

                {/* Participants Table (Card View for Mobile) */}
                <div className="space-y-3">
                    {currentData.map(v => {
                        const bp = v.systolic && v.diastolic ? `${v.systolic}/${v.diastolic}` : '—';
                        const sugar = v.sugarValue ? `${v.sugarValue} mg/dL` : '—';
                        const riskFlags = [
                            v.bmiCategory === 'Overweight' || v.bmiCategory === 'Obese' ? 'Overweight' : null,
                            (v.systolic ?? 0) >= 140 || (v.diastolic ?? 0) >= 90 ? 'High BP' : null,
                            (v.sugarValue ?? 0) >= 126 ? 'High Sugar' : null
                        ].filter(Boolean);

                        return (
                            <motion.div
                                key={v.id}
                                layout
                                className="bg-white rounded-2xl shadow-md p-4 border border-slate-100"
                            >
                                <div className="flex justify-between mb-2">
                                    <div className="font-bold text-slate-800">{v.personId}</div>
                                    <div className="text-xs text-slate-400">{v.age ?? '—'} yrs</div>
                                </div>
                                <div className="flex justify-between text-sm text-slate-600 mb-1">
                                    <span>Gender: {v.gender}</span>
                                    <span>BMI: {v.bmi}</span>
                                </div>
                                <div className="flex justify-between text-sm text-slate-600 mb-1">
                                    <span>BP: {bp}</span>
                                    <span>Sugar: {sugar}</span>
                                </div>
                                <div className="flex flex-wrap gap-1 text-xs mt-1">
                                    {riskFlags.map(flag => (
                                        <span key={flag} className="bg-red-200 text-red-800 px-2 py-0.5 rounded-full">
                                            {flag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <Pagination
                    current={page}
                    total={totalPages}
                    onPageChange={(p) => setPage(p)}
                />
            </div>
        </motion.div>
    );
}