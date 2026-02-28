
      INSERT INTO persons (its_no, age, gender)
      VALUES (30484404, 30, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30484404, 170, 72, 24.9, 'Normal', 100, 70, 'HTN', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20361305, 30, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20361305, 150, 78, 34.7, 'Obese', 110, 80, 'H?', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30348298, 20, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30348298, 180, 113, 34.9, 'Obese', 130, 80, 'HTN -', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30393606, 30, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30393606, 158, 75, 30, 'Obese', 160, 80, 'DM - Advice BP Monitor', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30366499, 30, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30366499, 171, 66, 22.6, 'Normal', 130, 70, NULL, '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30352071, 20, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30352071, 174, 72, 23.8, 'Normal', 160, 100, 'Known case of HTN - Medication ?', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30496679, 30, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30496679, 168, 65, 23, 'Normal', 100, 70, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20434922, 20, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20434922, 168, 76, 26.9, 'Overweight', 110, 70, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30368123, 30, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30368123, 176, 83, 26.8, 'Overweight', 120, 70, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30393676, 30, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30393676, 171, 102, 34.9, 'Obese', 120, 80, 'OBESITY', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (40407885, 40, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (40407885, 172, 100, 33.8, 'Obese', 120, 80, 'DM / HTN', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (60428247, 60, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (60428247, 173, 89, 29.7, 'Overweight', 114, 81, '-> 10kg', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30393454, 30, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30393454, 165, 86, 31.6, 'Obese', 132, 87, 'Reduce 10 kg', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20433879, 20, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20433879, 172, 86, 29.1, 'Overweight', 114, 72, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (50435213, 50, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (50435213, 160, 71, 27.3, 'Overweight', 141, 76, 'Known case of HTN', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30485703, 30, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30485703, 178, 84, 26.5, 'Overweight', 118, 72, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20432522, 20, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20432522, 171, 76, 26, 'Overweight', 112, 85, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20352045, 20, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20352045, 176, 90, 29.1, 'Overweight', 118, 81, '5 kg reduce', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20352266, 20, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20352266, 168, 68, 24.1, 'Normal', 105, 72, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30334473, 30, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30334473, 169, 65, 22.8, 'Normal', 115, 82, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20352418, 20, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20352418, 168, 94, 33.3, 'Obese', 154, 83, 'Known case of HTN -> 10kg', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30366498, 30, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30366498, 169, 65, 22.8, 'Normal', 115, 82, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30377734, 30, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30377734, 170, 70, 24.2, 'Normal', 118, 82, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30493047, 30, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30493047, 113, 80, 26.7, 'Overweight', 114, 77, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30366224, 30, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30366224, 168, 65, 22.8, 'Normal', 115, 82, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (60434718, 44, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (60434718, 169, 87, 30.5, 'Obese', 139, 80, 'Alc HTN / DM', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20438981, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20438981, 155, 80, 33.3, 'Obese', 170, 110, 'Alc HTN', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20393235, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20393235, 156, 65, 26.7, 'Overweight', 120, 80, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30398234, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30398234, 172, 80, 27, 'Overweight', 130, 90, 'HTN / DM', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20387996, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20387996, 168, 86, 30.5, 'Obese', 140, 90, 'HTN / Hypercholesteremia', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30421159, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30421159, 177, 69, 22, 'Normal', 110, 70, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (40409027, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (40409027, 160, 70, 27.3, 'Overweight', 120, 80, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30376003, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30376003, 164, 73, 27.1, 'Overweight', 110, 70, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20376003, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20376003, 173, 62, 20.7, 'Normal', 140, 95, 'HTN / DM Tab. Metff (illegible)', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (60421309, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (60421309, 165, 132, 48.5, 'Obese', 130, 80, 'HTN - OBESITY ? 100 kg', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20436652, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20436652, 161, 74, 28.5, 'Overweight', 130, 80, 'Alc optic Neuritis / Azoran 50', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30393296, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30393296, 185, 80, 23.4, 'Normal', 110, 70, 'Wt Reduce - 6 kg', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30493045, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30493045, 166, 81, 29.4, 'Overweight', 120, 80, 'HTN - OBESITY', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20327962, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20327962, 165, 100, 36.7, 'Obese', 140, 80, 'HTN / DM', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30320004, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30320004, 170, 98, 33.9, 'Obese', 130, 80, 'HTN - N O T', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (40405962, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (40405962, 165, 100, 36.7, 'Obese', 130, 80, 'Reduce 15 kg', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20352762, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20352762, 170, 70, 24.2, 'Normal', 140, 90, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20437851, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20437851, 160, 72, 28.1, 'Overweight', 120, 80, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20437270, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20437270, 163, 93, 35, 'Obese', 130, 80, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30401015, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30401015, 169, 68, 23.8, 'Normal', 113, 83, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30315978, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30315978, 176, 75, 24.2, 'Normal', 161, 108, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (50467398, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (50467398, 175, 105, 34.3, 'Obese', 148, 96, '10 kg', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20352396, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20352396, 166, 70, 25.4, 'Overweight', 140, 92, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20348204, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20348204, 178, 89, 27.8, 'Overweight', 124, 84, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (50494482, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (50494482, 170, 85, 29.4, 'Overweight', 121, 81, '5 kg less', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30487354, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30487354, 165, 77, 28.3, 'Overweight', 150, 102, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30394073, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30394073, 182, 86, 26, 'Overweight', 117, 82, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (50451843, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (50451843, 164, 69, 25.7, 'Overweight', 144, 90, 'Known case DM', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30394615, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30394615, 172, 75, 25.4, 'Overweight', 116, 75, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (40447648, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (40447648, 169, 76, 26.6, 'Overweight', 129, 70, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20435724, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20435724, 166, 77, 27.9, 'Overweight', 119, 77, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30393296, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30393296, 169, 70, 24.5, 'Normal', 118, 74, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20358930, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20358930, 182, 96, 29, 'Overweight', 138, 91, '10 kg', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (40494785, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (40494785, 163, 104, 39.1, 'Obese', 108, 84, '20 kg', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20436171, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20436171, 182, 95, 28.7, 'Overweight', 186, 113, 'to attend Physician', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30368385, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30368385, 173, 105, 35.1, 'Obese', 155, 91, 'to reduce 10 kg', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20352406, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20352406, 178, 78, 24.6, 'Normal', NULL, NULL, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (50489937, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (50489937, 168, 95, 33.7, 'Obese', 133, 82, '10 kg', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20327458, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20327458, 166, 77, 27.9, 'Overweight', NULL, NULL, 'P.T.O', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20387885, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20387885, 149, 67, 30.2, 'Obese', 121, 82, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30393280, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30393280, 176, 96, 31, 'Obese', 140, 97, '10 kg', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (40430271, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (40430271, 178, 125, 39.5, 'Obese', 120, 80, 'OBESITY Asthma', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20401396, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20401396, 161, 70, 27, 'Overweight', 120, 80, 'Overweight', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30393622, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30393622, 175, 91, 29.7, 'Overweight', 110, 70, 'HTN / First DM', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20437362, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20437362, 171, 83, 28.4, 'Overweight', 180, 90, 'OBESITY', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20436292, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20436292, 185, 120, 35.1, 'Obese', 120, 80, 'OBESITY', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30312040, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30312040, 174, 100, 33, 'Obese', 110, 80, 'OBESITY', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20348055, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20348055, 169, 96, 33.6, 'Obese', 120, 80, 'OBESITY', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20437207, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20437207, 171, 82, 28, 'Overweight', 130, 90, '???', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30394049, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30394049, 169, 74, 25.9, 'Overweight', 120, 80, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (50494325, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (50494325, 166, 61, 22.1, 'Normal', 120, 80, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30392499, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30392499, 183, 90, 26.1, 'Overweight', 130, 80, 'DM / HTN', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20438355, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20438355, 170, 85, 29.4, 'Overweight', 130, 80, 'HTN', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30393163, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30393163, 175, 90, 29.4, 'Overweight', 130, 95, 'HTN', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20439075, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20439075, 180, 108, 33.3, 'Obese', 120, 80, 'OBESITY', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30493347, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30493347, 163, 75, 28.2, 'Overweight', 110, 80, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20434848, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20434848, 164, 84, 31.3, 'Obese', 130, 80, 'HTN', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20434146, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20434146, 166, 82, 29.8, 'Overweight', 120, 80, 'HTN', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20402239, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20402239, 175, 92, 30, 'Obese', 120, 80, 'OBESITY', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20352051, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20352051, 166, 91, 33, 'Obese', 140, 80, '', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20406921, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20406921, 165, 86, 31.6, 'Obese', 120, 80, 'HTN / DM', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20352109, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20352109, 150, 65, 28.9, 'Overweight', 110, 70, 'HTN / DM', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20352433, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20352433, 166, 68, 24.7, 'Normal', 160, 100, '', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30487476, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30487476, 176, 83, 26.8, 'Overweight', 130, 80, '', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30487478, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30487478, 180, 116, 35.8, 'Obese', 130, 80, '10 kg less', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20376586, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20376586, 169, 102, 35.7, 'Obese', 144, 84, '10 kg less', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20438156, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20438156, 167, 78, 28, 'Overweight', 115, 68, '', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30367154, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30367154, 168, 65, 23, 'Normal', 140, 88, '', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (40449984, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (40449984, 167, 80, 28.7, 'Overweight', 158, 100, '5 kg less', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20437697, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20437697, 165, 79, 29, 'Overweight', 136, 96, '', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30393698, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30393698, 169, 80, 28, 'Overweight', 135, 67, '', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20434657, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20434657, 172, 65, 22, 'Normal', 114, 89, '', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (40469239, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (40469239, 169, 81, 28.4, 'Overweight', 155, 100, 'Known case of HTN', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20437563, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20437563, 161, 85, 32.8, 'Obese', 138, 78, '', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20437067, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20437067, 165, 85, 31.2, 'Obese', 173, 92, '5 kg less', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30394571, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30394571, 179, 100, 31.2, 'Obese', 128, 74, '10 kg less', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20438071, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20438071, 156, 89, 36.6, 'Obese', 122, 76, '5 kg less', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30488087, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30488087, 175, 110, 35.9, 'Obese', 141, 88, '20 kg less', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20348347, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20348347, 172, 69, 23.3, 'Normal', 130, 80, 'HTN', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30377115, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30377115, 172, 75, 25.4, 'Overweight', 120, 80, 'HTN', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20402271, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20402271, 162, 64, 24.4, 'Normal', 110, 70, 'HTN', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20438209, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20438209, 170, 64, 22.1, 'Normal', 120, 70, '', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20361344, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20361344, 172, 69, 23.3, 'Normal', 110, 80, '', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20352045, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20352045, 175, 90, 29.4, 'Overweight', 130, 90, '', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (40474327, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (40474327, 159, 71, 28.5, 'Overweight', 140, 90, '???', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30487840, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30487840, 185, 85, 24.8, 'Normal', 110, 70, '', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20437455, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20437455, 175, 99, 30.9, 'Obese', 130, 80, 'Obesity', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20358907, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20358907, 178, 94, 30.7, 'Obese', 130, 90, 'HTN', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20403313, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20403313, 167, 72, 25.8, 'Overweight', 120, 80, '', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20406213, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20406213, 173, 80, 26.7, 'Overweight', 130, 90, '???', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20358932, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20358932, 171, 75, 25.1, 'Overweight', 130, 85, '', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30484648, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30484648, 175, 83, 27.1, 'Overweight', 130, 90, '???', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20438353, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20438353, 177, 81, 25.9, 'Overweight', 120, 80, '', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30442731, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30442731, 168, 75, 26.6, 'Overweight', 110, 70, '', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30393420, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30393420, 174, 66, 21.8, 'Normal', 120, 80, '', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20435699, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20435699, 166, 60, 21.8, 'Normal', 110, 80, '', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (50440299, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (50440299, 177, 80, 23.5, 'Normal', 110, 70, '', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20387880, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20387880, 170, 85, 29.4, 'Overweight', 140, 95, 'HTN', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30367733, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30367733, 181, 73, 22.2, 'Normal', 137, 29, 'H/O HTN', '2026-02-25 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20356122, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20356122, 162, 62, 23.6, 'Normal', 126, NULL, '10kg less', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30393475, 39, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30393475, 164, 124, 46.1, 'Obese', 120, 83, '20kg less', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30487654, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30487654, 175, 89, 29.1, 'Overweight', 130, 80, 'Known case of HTN', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20342331, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20342331, 172, 89, 30.1, 'Obese', 141, 82, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30396236, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30396236, 169, 101, 35.4, 'Obese', 138, 92, '10kg less', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20387384, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20387384, 167, 96, 34.4, 'Obese', 126, 82, '10kg less', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30393284, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30393284, 168, 84, 29.8, 'Overweight', 110, 80, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20348494, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20348494, 168, 86, 30.5, 'Obese', 121, 81, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20355618, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20355618, 169, 95, 33.3, 'Obese', 158, 95, '10kg less', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (60446388, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (60446388, 176, 88, 28.4, 'Overweight', 121, 81, 'Repeat BP soon', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30487554, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30487554, 159, 70, 27.7, 'Overweight', 135, 91, 'Reduce 5kg', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30303886, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30303886, 171, 78, 26.7, 'Overweight', 136, 92, 'Reduce 10kg', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30602932, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30602932, 166, 90, 32.7, 'Obese', 121, 72, 'Reduce 10kg', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20437832, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20437832, 162, 90, 34.3, 'Obese', 121, 80, 'Reduce 10kg', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20387870, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20387870, 175, 73, 23.8, 'Normal', 126, 81, 'Reduce 10kg', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30393374, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30393374, 166, 74, 26.9, 'Overweight', 126, 81, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20342331, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20342331, 167, 64, 22.9, 'Normal', 146, 94, 'To reduce BP. DE', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20403333, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20403333, 167, 64, 22.9, 'Normal', 133, 105, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (30475414, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (30475414, 166, 64, 23.2, 'Normal', 145, 91, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20386932, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20386932, 155, 65, 27.1, 'Overweight', 109, 69, '', '2026-02-26 00:00:00.000');
    

      INSERT INTO persons (its_no, age, gender)
      VALUES (20352292, NULL, 'Male')
      ON CONFLICT (its_no) DO UPDATE SET age = EXCLUDED.age, gender = 'Male';
    

      INSERT INTO visits (its_no, height_cm, weight_kg, bmi, bmi_category, systolic, diastolic, note, recorded_at)
      VALUES (20352292, 168, 71, 25.2, 'Overweight', 146, 91, '', '2026-02-26 00:00:00.000');
    