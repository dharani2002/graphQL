import express from "express";
import cors from "cors";
import { createHandler } from "graphql-http";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());
//app.all("/graphql", createHandler({ schema }));

export default app

