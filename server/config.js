import { config } from 'dotenv';

config(); // Carga las variables del archivo .env

export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || '';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_DATABASE = process.env.DB_DATABASE || 'test';
export const DB_PORT = process.env.DB_PORT || 3306;
export const PORT = process.env.PORT || 4000;