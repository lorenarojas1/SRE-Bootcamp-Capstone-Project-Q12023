import dotenv from 'dotenv';
import process from 'process';

dotenv.config();

export const config = {
  DB_HOST: process.env.DB_HOST,
	DB_USER: process.env.DB_USER,
	DB_PASSWORD: process.env.DB_PASSWORD,
	DB_DATABASE: process.env.DB_DATABASE,
	DB_PORT: process.env.DB_PORT,
	JWT_KEY: process.env.JWT_KEY,
	APP_PORT: process.env.APP_PORT,
}