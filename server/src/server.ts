import express from "express";
import cors from 'cors';
import { createHandler } from "graphql-http";
import "dotenv/config";
import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";

const main=async()=>{
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1234",
      database: "employees",
      port: 3306,
    });

    const db = drizzle(connection);
    console.log("Database connection successful");
    
    const app=express()
    app.use(cors())
    app.use(express.json())
    //app.all("/graphql", createHandler({ schema }));
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
    return db;
}

main().catch(err=>{
    console.error(err)
})






















/*
import "dotenv/config";
import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";

async function main() {
  try {

    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1234",
      database: "employees",
      port: 3306,
    });

    const db = drizzle(connection);
    console.log("Database connection successful");
    return db;
  } catch (error) {
    console.error("Connection error details:", error);
    throw error;
  }
}

main().catch((error) => {
  console.error("Error connecting to database:", error);
  process.exit(1);
});
*/