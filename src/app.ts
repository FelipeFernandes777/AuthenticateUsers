import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import { routes } from "./routes";

dotenv.config();

const app: express.Application = express();

app.use(bodyParser.json(), routes);

export { app };
