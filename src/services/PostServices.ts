import { Request, Response } from "express";
import { PostRepositories } from "../repositories/PostRepositories";

export class PostServices extends PostRepositories {
  constructor() {
    super();
  }

  public async createPosts(req: Request, res: Response) {
    const { title, content, description, id } = req.body;

    try {
      const postRepositories = new PostRepositories();

      await postRepositories.create(title, content, description, id);
      res.status(201).send({
        message: "Post Criado"
      })
    } catch (error) {
      res.status(400).send({
        message: "Bad Request",
      });
    }
  }
}
