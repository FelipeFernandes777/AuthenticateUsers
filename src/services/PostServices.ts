import { Request, Response } from "express";
import { PostRepositories } from "../repositories/PostRepositories";

export class PostServices extends PostRepositories {
  constructor() {
    super();
  }

  public async listPosts(req: Request, res: Response) {
    try {
      const postRepositories = new PostRepositories();

      const posts = await postRepositories.list();

      res.status(200).send(posts);
    } catch (error) {
      res.status(400).send({
        error: "Bad Request!",
      });
    }
  }

  public async createPosts(req: Request, res: Response): Promise<void> {
    const { title, content, description, id } = req.body;

    try {
      if (title.length === 0 || content.length === 0) {
        res.status(400).send({
          status: "Error",
          message: "Preencha os campos vazios",
        });
      } else {
        const postRepositories = new PostRepositories();
        await postRepositories.create(title, content, description, id);
        res.status(201).send({
          message: "Post Criado",
        });
      }
    } catch (error) {
      res.status(400).send({
        message: "Bad Request",
      });
    }
  }

  public async updatedPost(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { title, content, description } = req.body;

    try {
      const postRepositories = new PostRepositories();

      await postRepositories.update(id, title, content, description);

      res.status(200).send({ message: "Post atualizado com sucesso!" });
    } catch (error) {
      res.status(400).send({
        error: "Bad Request",
      });
    }
  }

  public async deletePost(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      const postRepositories = new PostRepositories();

      await postRepositories.delete(id);

      res.status(200).send({
        message: "Post deletado com sucesso!",
      });
    } catch (error) {
      res.status(500).send({
        error: "Internal server error",
      });
    }
  }
}
