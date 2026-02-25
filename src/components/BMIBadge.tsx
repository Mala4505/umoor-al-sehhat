import React from 'react';
interface BMIBadgeProps {
  bmi: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
}
type BMIInfo = {
  label: string;
  bg: string;
  text: string;
  dot: string;
};
function getBMIInfo(bmi: number): BMIInfo {
  if (bmi < 18.5)
  return {
    label: 'Underweight',
    bg: 'bg-sky-50',
    text: 'text-sky-700',
    dot: 'bg-sky-400'
  };
  if (bmi < 25)
  return {
    label: 'Normal',
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    dot: 'bg-emerald-400'
  };
  if (bmi < 30)
  return {
    label: 'Overweight',
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    dot: 'bg-amber-400'
  };
  return {
    label: 'Obese',
    bg: 'bg-red-50',
    text: 'text-red-700',
    dot: 'bg-red-400'
  };
}
export function BMIBadge({
  bmi,
  size = 'md',
  showValue = true
}: BMIBadgeProps) {
  const info = getBMIInfo(bmi);
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 gap-1',
    md: 'text-sm px-2.5 py-1 gap-1.5',
    lg: 'text-base px-3 py-1.5 gap-2'
  };
  const dotSizes = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-2.5 h-2.5'
  };
  return (
    <span
      className={`inline-flex items-center rounded-full font-semibold ${info.bg} ${info.text} ${sizeClasses[size]}`}>

      <span
        className={`rounded-full flex-shrink-0 ${info.dot} ${dotSizes[size]}`} />

      {showValue && <span className="font-bold">{bmi.toFixed(1)}</span>}
      <span className={showValue ? 'opacity-75' : ''}>{info.label}</span>
    </span>);

}