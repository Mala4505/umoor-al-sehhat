import { supabase } from './supabaseClient';
import { Person } from '../types';

export const personsApi = {
    async findPersonByITS(its: string): Promise<Person | null> {
        const { data, error } = await supabase
            .from('persons')
            .select('*')
            .eq('its_no', parseInt(its))
            .single();

        if (error) {
            if (error.code === 'PGRST116') return null; // Not found
            throw error;
        }

        return {
            id: data.its_no.toString(),
            gender: data.gender,
            age: data.age
        };
    },

    async createPerson(person: Person): Promise<Person> {
        const { data, error } = await supabase
            .from('persons')
            .insert([
                {
                    its_no: parseInt(person.id),
                    gender: person.gender,
                    age: person.age
                }
            ])
            .select()
            .single();

        if (error) throw error;

        return {
            id: data.its_no.toString(),
            gender: data.gender,
            age: data.age
        };
    }
};
