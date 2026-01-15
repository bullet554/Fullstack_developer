import { createClient } from '@supabase/supabase-js';

let supabase;

export const initSupabase = () => {
    if (supabase) return supabase;
    if (!process.env.SUPABASE_URL) {
        throw new Error('Ошибка: SUPABASE_URL не найден в .env');
    }
    if (!process.env.SUPABASE_KEY) {
        throw new Error('Ошибка: SUPABASE_KEY не найден в .env');
    }

    supabase = createClient(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_KEY
    );

    console.log('Supabase клиент инициализирован');
    return supabase;
};

export default initSupabase;
