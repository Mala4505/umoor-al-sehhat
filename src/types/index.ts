// // types.ts

// export interface Person {
//   id: string; // ITS number — the only unique identifier
//   gender: 'Male' | 'Female';
//   age: number | undefined; // optional, can be added later
//   visits?: Visit[]; // optional, used for profile aggregation
// }

// export interface Visit {
//   id: string;
//   personId: string;
//   date: string;
//   height: number; // cm
//   weight: number; // kg
//   bmi: number;
//   bmiCategory: 'Underweight' | 'Normal' | 'Overweight' | 'Obese';
//   systolic?: number; // mmHg
//   diastolic?: number; // mmHg
//   sugarValue?: number; // mg/dL
//   sugarType?: 'fasting' | 'random' | 'post-meal';
//   knownConditions?: string[]; // <-- NEW: array of selected known conditions
//   notes?: string;
// }

// export type Screen = 'login' | 'dashboard' | 'addEntry' | 'records' | 'profile';

// export interface ToastMessage {
//   id: string;
//   message: string;
//   type: 'success' | 'error';
// }

// /**
//  * Calculate BMI from height (cm) and weight (kg)
//  */
// export function calculateBMI(height: number, weight: number): number {
//   const h = height / 100;
//   return Math.round((weight / (h * h)) * 10) / 10;
// }

// /**
//  * Determine BMI category based on value
//  */
// export function getBMICategory(
//   bmi: number
// ): 'Underweight' | 'Normal' | 'Overweight' | 'Obese' {
//   if (bmi < 18.5) return 'Underweight';
//   if (bmi < 25) return 'Normal';
//   if (bmi < 30) return 'Overweight';
//   return 'Obese';
// }

// types.ts

export interface Person {
  id: string; // ITS number — the only unique identifier
  gender: 'Male' | 'Female';
  age: number | undefined; // better for DB sync
  visits?: Visit[]; // optional, used for profile aggregation
}

export interface Visit {
  id: string;
  personId: string;
  date: string;
  height: number; // cm
  weight: number; // kg
  bmi: number;
  bmiCategory: 'Underweight' | 'Normal' | 'Overweight' | 'Obese';
  systolic?: number; // mmHg
  diastolic?: number; // mmHg
  sugarValue?: number; // mg/dL
  sugarType?: 'fasting' | 'random' | 'post-meal';
  knownConditions: string[]; // ALWAYS array → prevents map errors
  notes?: string;
}

export type Screen =
  | 'login'
  | 'dashboard'
  | 'addEntry'
  | 'records'
  | 'statistics'
  | 'profile';

export interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'error';
}

/**
 * Calculate BMI from height (cm) and weight (kg)
 */
export function calculateBMI(height: number, weight: number): number {
  const h = height / 100;
  return Math.round((weight / (h * h)) * 10) / 10;
}

/**
 * Determine BMI category based on value
 */
export function getBMICategory(
  bmi: number
): 'Underweight' | 'Normal' | 'Overweight' | 'Obese' {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Normal';
  if (bmi < 30) return 'Overweight';
  return 'Obese';
}