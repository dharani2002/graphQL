import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import "dotenv/config";
import { DB_NAME } from "../constants";
import * as schema from "../../drizzle/schema"

const poolConnection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  database: DB_NAME,
  port:Number(process.env.DB_PORT)
});

const db = drizzle(poolConnection, { 
    schema,
    mode: 'default'  // Add this line
  });

export default db