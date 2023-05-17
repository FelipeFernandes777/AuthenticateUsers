import { Response, Router } from "express";
import { PostController } from "../controllers/PostController";

const postsRoutes = Router();
const postsController = new PostController();

postsRoutes
  .get("/", (_, res: Response) => {
    res.status(200).send({
      message: "Posts",
    });
  })
  .get("/list", postsController.listPosts)
  .post("/create", postsController.createPosts)
  .put("/:id", postsController.updatedPost)
  .delete("/:id", postsController.deletePost);

export { postsRoutes };
