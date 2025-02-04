<<<<<<< HEAD
import express from "express";
import cors from "cors";
import { createHandler } from "graphql-http/lib/use/express";
import "dotenv/config";
import { schema } from "./api";

const app = express();
app.use(cors());
app.use(express.json());
app.all("/graphql", createHandler({ schema }));

export default app

=======
import express from "express";
import cors from "cors";

const app=express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

export default app
>>>>>>> 2b0db0474010346e0c916b61332a3d434faeb695
