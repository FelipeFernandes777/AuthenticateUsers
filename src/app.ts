import "express-async-errors";
import "cors";
import dotenv from "dotenv";

import express from "express";
import bodyParser from "body-parser";

import { routes } from "./routes";

dotenv.config();

const app: express.Application = express();

app.use(bodyParser.json(), routes);

export { app };
