import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app: express.Application = express();

app.use(bodyParser.json());

export { app };
