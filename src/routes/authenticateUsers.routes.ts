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
  .post("/singUp", userController.singUp)
  .get("/list", userController.getUser)
  .get("/list/:id", userController.getUserById)
  .get("/list/post/:id", userController.getPostForUser)
  .put("/:id", userController.updatedUsers)
  .delete("/:id", userController.deleteUser);

export { authenticateUsersRoutes };
