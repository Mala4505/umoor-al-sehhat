import fs from 'fs';
import csv from 'csv-parser';

// --- Helpers ---

// Parse blood pressure "SYS/DIA"
function parseBloodPressure(bp) {
  if (!bp) return { systolic: 'NULL', diastolic: 'NULL' };
  const [sys, dia] = bp.split('/').map(v => parseInt(v.trim(), 10));
  return {
    systolic: isNaN(sys) ? 'NULL' : sys,
    diastolic: isNaN(dia) ? 'NULL' : dia,
  };
}

// Derive BMI category
function getBmiCategory(bmi) {
  if (bmi === null || bmi === 'NULL') return 'NULL';
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Normal';
  if (bmi < 30) return 'Overweight';
  return 'Obese';
}

// Safe numeric conversion
function safeNumber(val) {
  const num = parseFloat(val);
  return isNaN(num) ? null : num;
}

// Convert DD-MM-YYYY → timestamp
function formatToTimestamp(dateStr) {
  if (!dateStr) return null;
  const [day, month, year] = dateStr.split('-');
  return `${year}-${month}-${day} 00:00:00.000`;
}

// --- Main Script ---

const results = [];
fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (row) => {
    const its_no = parseInt(row['ITS'], 10);
    const age = safeNumber(row['AGE']);
    const height = safeNumber(row['HT']);
    const weight = safeNumber(row['WT']);
    let bmi = safeNumber(row['BMI']);

    // If BMI missing, calculate from height/weight
    if ((bmi === null || bmi === 'NULL') && height && weight) {
      const heightM = height / 100; // convert cm → m
      bmi = +(weight / (heightM * heightM)).toFixed(1); // round to 1 decimal
    }

    const bmiSQL = bmi === null ? 'NULL' : bmi;
    const bmi_category = bmi === null ? 'NULL' : `'${getBmiCategory(bmi)}'`;

    const { systolic, diastolic } = parseBloodPressure(row['BP']);
    const note = row['NOTES / REMARKS'] ? row['NOTES / REMARKS'].replace(/'/g, "''") : null;
    const recorded_at = formatToTimestamp(row['DATE']);

    // persons insert (upsert style, gender always Male)
    const personSQL = `
      INSERT INTO persons (its_no, age, gender)
      VALUES (${its_no}, ${age ?? 'NULL'}, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    `;

    // visits insert
    const visitSQL = `
      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (${its_no}, ${height ?? 'NULL'}, ${weight ?? 'NULL'}, ${bmiSQL}, ${bmi_category}, ${systolic}, ${diastolic}, ${note ? `'${note}'` : 'NULL'}, '${recorded_at}');
    `;

    results.push(personSQL);
    results.push(visitSQL);
  })
  .on('end', () => {
    fs.writeFileSync('output.sql', results.join('\n'));
    console.log('SQL file generated: output.sql');
  });
