import { defineConfig } from "drizzle-kit";
import "dotenv/config";
import { DB_NAME } from "./src/constants";
export default defineConfig({
  dialect: 'mysql', // 'mysql' | 'sqlite' | 'turso'
  dbCredentials: {
    url: `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${DB_NAME}`,
  },
})