import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Настройка путей для ES‑модулей
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config({
    path: '.env', // Явно указываем путь
    debug: process.env.DEBUG // Для отладки (опционально)
});

console.log('SUPABASE_URL:', process.env.SUPABASE_URL);
console.log('SUPABASE_KEY:', process.env.SUPABASE_KEY);

console.log('=== ENVIRONMENT VARIABLES ===');
console.log('SUPABASE_URL:', process.env.SUPABASE_URL);
console.log('SUPABASE_KEY:', process.env.SUPABASE_KEY);
console.log('DOTENV LOADED:', !!process.env.SUPABASE_URL);
console.log('============================');

const app = express();

app.use(express.static(join(__dirname, 'public')));

app.use(cors());
app.use(express.json());

import authRoutes from './routes/auth.js';
import productRoutes from './routes/products.js';
import cartRoutes from './routes/cart.js';

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Static files: http://localhost:${PORT}/`);
});