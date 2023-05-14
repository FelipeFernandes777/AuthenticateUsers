import { Response, Router } from "express";

import { UsersController } from "../controllers/UsersController";

const userController = new UsersController();

const authenticateUsersRoutes = Router();

authenticateUsersRoutes
  .get("/", (_, res: Response) => {
    res.status(200).send({
      message: "Home Page",
    });
  })
  .post("/register", userController.createUser)
  .get("/list", userController.getUser)
  .get("/list/:id", userController.getUserById)
  .put("/:id", userController.updatedUsers)
  .delete("/:id", userController.deleteUser);

export { authenticateUsersRoutes };
