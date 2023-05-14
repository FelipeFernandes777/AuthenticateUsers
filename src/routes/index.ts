import { Router } from "express";
import { authenticateUsersRoutes } from "./authenticateUsers.routes";

const routes = Router();

routes.use("/user", authenticateUsersRoutes);

export { routes };
