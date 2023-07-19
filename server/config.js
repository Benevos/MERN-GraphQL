import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 5000;
export const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017";
export const DB_NAME = process.env.DB_NAME || "/test";