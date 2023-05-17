import { Router } from "express";
import { authenticateUsersRoutes } from "./authenticateUsers.routes";
import { postsRoutes } from "./posts.routes";

const routes = Router();

routes.use("/user", authenticateUsersRoutes);
routes.use("/post", postsRoutes);

export { routes };
