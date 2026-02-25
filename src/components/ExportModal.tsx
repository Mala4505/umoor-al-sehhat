import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, DownloadIcon, FileTextIcon, PrinterIcon } from 'lucide-react';
import { Person, Visit } from '../types';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  persons: Person[];
  visits: Visit[];
}

function getBMICategory(bmi: number): string {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Normal';
  if (bmi < 30) return 'Overweight';
  return 'Obese';
}

export function ExportModal({
  isOpen,
  onClose,
  persons,
  visits,
}: ExportModalProps) {

  const exportCSV = () => {
    const headers = [
      'ITS Number',
      'Gender',
      'Age',
      'Visit Date',
      'Height (cm)',
      'Weight (kg)',
      'BMI',
      'BMI Category',
      'Systolic (mmHg)',
      'Diastolic (mmHg)',
      'Sugar (mg/dL)',
      'Sugar Type',
      'Notes',
    ];

    const rows = visits.map((visit) => {
      const person = persons.find((p) => p.id === visit.personId);
      return [
        person?.id ?? '',
        person?.gender ?? '',
        person?.age ?? '',
        new Date(visit.date).toLocaleDateString(),
        visit.height,
        visit.weight,
        visit.bmi.toFixed(1),
        getBMICategory(visit.bmi),
        visit.systolic ?? '',
        visit.diastolic ?? '',
        visit.sugarValue ?? '',
        visit.sugarType ?? '',
        visit.notes ?? '',
      ];
    });

    const csvContent = [headers, ...rows]
      .map((row) => row.map((cell) => `"${cell}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `umoor-al-sehhat-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();

    URL.revokeObjectURL(url);
    onClose();
  };

  const exportJSON = () => {
    const data = { persons, visits, exportedAt: new Date().toISOString() };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = `umoor-al-sehhat-${new Date().toISOString().split('T')[0]}.json`;
    link.click();

    URL.revokeObjectURL(url);
    onClose();
  };

  const printReport = () => {
    window.print();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Center modal wrapper */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[85vh] flex flex-col overflow-hidden"
            >

              {/* Header */}
              <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-lg font-bold text-slate-800">
                    Export Data
                  </h2>
                  <p className="text-sm text-slate-400 mt-0.5">
                    {persons.length} persons · {visits.length} visits
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center active:bg-slate-200 transition-colors"
                >
                  <XIcon className="w-4 h-4 text-slate-600" />
                </button>
              </div>

              {/* Scrollable body */}
              <div className="p-5 space-y-2.5 overflow-y-auto">
                <ExportOption
                  icon={<DownloadIcon className="w-5 h-5 text-white" />}
                  iconBg="bg-teal-600"
                  title="Export as CSV"
                  subtitle="Open in Excel or Google Sheets"
                  onClick={exportCSV}
                />

                <ExportOption
                  icon={<FileTextIcon className="w-5 h-5 text-white" />}
                  iconBg="bg-indigo-500"
                  title="Export as JSON"
                  subtitle="Full data backup with all fields"
                  onClick={exportJSON}
                />

                <ExportOption
                  icon={<PrinterIcon className="w-5 h-5 text-white" />}
                  iconBg="bg-slate-500"
                  title="Print Report"
                  subtitle="Print or save as PDF"
                  onClick={printReport}
                />
              </div>

            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

function ExportOption({
  icon,
  iconBg,
  title,
  subtitle,
  onClick,
}: {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  subtitle: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-4 p-4 rounded-2xl bg-slate-50 active:bg-slate-100 transition-colors text-left"
    >
      <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center`}>
        {icon}
      </div>
      <div>
        <p className="font-semibold text-slate-800 text-sm">{title}</p>
        <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>
      </div>
    </button>
  );
}