// import { supabase } from './supabaseClient';
// import { Visit } from '../types';

// export const visitsApi = {
//     async addVisit(visit: Omit<Visit, 'id'>): Promise<Visit> {
//         const { data, error } = await supabase
//             .from('visits')
//             .insert([
//                 {
//                     its_no: parseInt(visit.personId),
//                     height_cm: visit.height,
//                     weight_kg: visit.weight,
//                     bmi: visit.bmi,
//                     bmi_category: visit.bmiCategory,
//                     systolic: visit.systolic,
//                     diastolic: visit.diastolic,
//                     sugar_value: visit.sugarValue,
//                     sugar_type: visit.sugarType,
//                     note: visit.notes,
//                     known_conditions: visit.knownConditions, // <-- added
//                     recorded_at: visit.date
//                 }
//             ])
//             .select()
//             .single();

//         if (error) throw error;

//         return {
//             id: data.id,
//             personId: data.its_no.toString(),
//             date: data.recorded_at,
//             height: data.height_cm,
//             weight: data.weight_kg,
//             bmi: data.bmi,
//             bmiCategory: data.bmi_category,
//             systolic: data.systolic,
//             diastolic: data.diastolic,
//             sugarValue: data.sugar_value,
//             sugarType: data.sugar_type,
//             notes: data.note,
//             knownConditions: data.known_conditions // <-- added
//         };
//     },

//     async getVisitsByITS(its: string): Promise<Visit[]> {
//         const { data, error } = await supabase
//             .from('visits')
//             .select('*')
//             .eq('its_no', parseInt(its))
//             .order('recorded_at', { ascending: false });

//         if (error) throw error;

//         return data.map((v) => ({
//             id: v.id,
//             personId: v.its_no.toString(),
//             date: v.recorded_at,
//             height: v.height_cm,
//             weight: v.weight_kg,
//             bmi: v.bmi,
//             bmiCategory: v.bmi_category,
//             systolic: v.systolic,
//             diastolic: v.diastolic,
//             sugarValue: v.sugar_value,
//             sugarType: v.sugar_type,
//             notes: v.note,
//             knownConditions: v.known_conditions // <-- added
//         }));
//     },

//     async updateVisit(id: string, visit: Partial<Visit>): Promise<Visit> {
//         const updateData: any = {};
//         if (visit.height !== undefined) updateData.height_cm = visit.height;
//         if (visit.weight !== undefined) updateData.weight_kg = visit.weight;
//         if (visit.bmi !== undefined) updateData.bmi = visit.bmi;
//         if (visit.bmiCategory !== undefined) updateData.bmi_category = visit.bmiCategory;
//         if (visit.systolic !== undefined) updateData.systolic = visit.systolic;
//         if (visit.diastolic !== undefined) updateData.diastolic = visit.diastolic;
//         if (visit.sugarValue !== undefined) updateData.sugar_value = visit.sugarValue;
//         if (visit.sugarType !== undefined) updateData.sugar_type = visit.sugarType;
//         if (visit.notes !== undefined) updateData.note = visit.notes;
//         if (visit.knownConditions !== undefined) updateData.known_conditions = visit.knownConditions; // <-- added

//         const { data, error } = await supabase
//             .from('visits')
//             .update(updateData)
//             .eq('id', id)
//             .select()
//             .single();

//         if (error) throw error;

//         return {
//             id: data.id,
//             personId: data.its_no.toString(),
//             date: data.recorded_at,
//             height: data.height_cm,
//             weight: data.weight_kg,
//             bmi: data.bmi,
//             bmiCategory: data.bmi_category,
//             systolic: data.systolic,
//             diastolic: data.diastolic,
//             sugarValue: data.sugar_value,
//             sugarType: data.sugar_type,
//             notes: data.note,
//             knownConditions: data.known_conditions // <-- added
//         };
//     },

//     async getAllVisits(): Promise<(Visit & { gender: string; age: number })[]> {
//         const { data, error } = await supabase
//             .from('visits')
//             .select(`
//                 *,
//                 persons (
//                     gender,
//                     age
//                 )
//             `)
//             .order('recorded_at', { ascending: false });

//         if (error) throw error;

//         return data.map((v: any) => ({
//             id: v.id,
//             personId: v.its_no.toString(),
//             date: v.recorded_at,
//             height: v.height_cm,
//             weight: v.weight_kg,
//             bmi: v.bmi,
//             bmiCategory: v.bmi_category,
//             systolic: v.systolic,
//             diastolic: v.diastolic,
//             sugarValue: v.sugar_value,
//             sugarType: v.sugar_type,
//             notes: v.note,
//             knownConditions: v.known_conditions, // <-- added
//             gender: v.persons.gender,
//             age: v.persons.age
//         }));
//     },

//     async deleteVisit(id: string): Promise<void> {
//         const { error } = await supabase
//             .from('visits')
//             .delete()
//             .eq('id', id);

//         if (error) throw error;
//     }
// };

import { supabase } from './supabaseClient';
import { Visit } from '../types';

const parseConditions = (val: any): string[] => {
    if (!val) return [];
    if (Array.isArray(val)) return val;
    try {
        return JSON.parse(val);
    } catch {
        return [];
    }
};

const stringifyConditions = (val?: string[]) => {
    if (!val) return null;
    return JSON.stringify(val);
};

export const visitsApi = {
    async addVisit(visit: Omit<Visit, 'id'>): Promise<Visit> {
        const { data, error } = await supabase
            .from('visits')
            .insert([
                {
                    its_no: parseInt(visit.personId),
                    height_cm: visit.height,
                    weight_kg: visit.weight,
                    bmi: visit.bmi,
                    bmi_category: visit.bmiCategory,
                    systolic: visit.systolic,
                    diastolic: visit.diastolic,
                    sugar_value: visit.sugarValue,
                    sugar_type: visit.sugarType,
                    note: visit.notes,
                    known_conditions: stringifyConditions(visit.knownConditions),
                    recorded_at: visit.date
                }
            ])
            .select()
            .single();

        if (error) throw error;

        return {
            id: data.id,
            personId: data.its_no.toString(),
            date: data.recorded_at,
            height: data.height_cm,
            weight: data.weight_kg,
            bmi: data.bmi,
            bmiCategory: data.bmi_category,
            systolic: data.systolic,
            diastolic: data.diastolic,
            sugarValue: data.sugar_value,
            sugarType: data.sugar_type,
            notes: data.note,
            knownConditions: parseConditions(data.known_conditions)
        };
    },

    async getVisitsByITS(its: string): Promise<Visit[]> {
        const { data, error } = await supabase
            .from('visits')
            .select('*')
            .eq('its_no', parseInt(its))
            .order('recorded_at', { ascending: false });

        if (error) throw error;

        return data.map((v) => ({
            id: v.id,
            personId: v.its_no.toString(),
            date: v.recorded_at,
            height: v.height_cm,
            weight: v.weight_kg,
            bmi: v.bmi,
            bmiCategory: v.bmi_category,
            systolic: v.systolic,
            diastolic: v.diastolic,
            sugarValue: v.sugar_value,
            sugarType: v.sugar_type,
            notes: v.note,
            knownConditions: parseConditions(v.known_conditions)
        }));
    },

    async updateVisit(id: string, visit: Partial<Visit>): Promise<Visit> {
        const updateData: any = {};

        if (visit.height !== undefined) updateData.height_cm = visit.height;
        if (visit.weight !== undefined) updateData.weight_kg = visit.weight;
        if (visit.bmi !== undefined) updateData.bmi = visit.bmi;
        if (visit.bmiCategory !== undefined) updateData.bmi_category = visit.bmiCategory;
        if (visit.systolic !== undefined) updateData.systolic = visit.systolic;
        if (visit.diastolic !== undefined) updateData.diastolic = visit.diastolic;
        if (visit.sugarValue !== undefined) updateData.sugar_value = visit.sugarValue;
        if (visit.sugarType !== undefined) updateData.sugar_type = visit.sugarType;
        if (visit.notes !== undefined) updateData.note = visit.notes;
        if (visit.knownConditions !== undefined)
            updateData.known_conditions = stringifyConditions(visit.knownConditions);

        const { data, error } = await supabase
            .from('visits')
            .update(updateData)
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;

        return {
            id: data.id,
            personId: data.its_no.toString(),
            date: data.recorded_at,
            height: data.height_cm,
            weight: data.weight_kg,
            bmi: data.bmi,
            bmiCategory: data.bmi_category,
            systolic: data.systolic,
            diastolic: data.diastolic,
            sugarValue: data.sugar_value,
            sugarType: data.sugar_type,
            notes: data.note,
            knownConditions: parseConditions(data.known_conditions)
        };
    },

    async getAllVisits(): Promise<(Visit & { gender: string; age: number })[]> {
        const { data, error } = await supabase
            .from('visits')
            .select(`
                *,
                persons (
                    gender,
                    age
                )
            `)
            .order('recorded_at', { ascending: false });

        if (error) throw error;

        return data.map((v: any) => ({
            id: v.id,
            personId: v.its_no.toString(),
            date: v.recorded_at,
            height: v.height_cm,
            weight: v.weight_kg,
            bmi: v.bmi,
            bmiCategory: v.bmi_category,
            systolic: v.systolic,
            diastolic: v.diastolic,
            sugarValue: v.sugar_value,
            sugarType: v.sugar_type,
            notes: v.note,
            knownConditions: parseConditions(v.known_conditions),
            gender: v.persons.gender,
            age: v.persons.age
        }));
    },

    async deleteVisit(id: string): Promise<void> {
        const { error } = await supabase
            .from('visits')
            .delete()
            .eq('id', id);

        if (error) throw error;
    }
};