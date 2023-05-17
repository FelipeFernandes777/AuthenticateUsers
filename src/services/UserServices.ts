import { NextFunction, Request, Response } from "express";
import { UserRepositories } from "../repositories/UserRepositories";
import { prisma } from "../database";
import { sign, verify } from "jsonwebtoken";

export class UserServices extends UserRepositories {
  constructor() {
    super();
  }

  public async createUser(req: Request, res: Response): Promise<void> {
    const { name, email, password, confirmPassword } = req.body;

    const userAlredyExists = await prisma.user.findMany({
      where: {
        email: email,
      },
    });

    if (password !== confirmPassword) {
      res.status(422).send({
        message: "As senhas não conferem",
      });
    }

    if (userAlredyExists) {
      res.status(422).send({
        message: "Usuario já existe!",
      });
    }

    try {
      const userRepostitories = new UserRepositories();

      await userRepostitories.create(name, email, password);

      res.status(201).send({ message: "Usuario Criado!" });
    } catch (error) {
      res.status(400).send({ message: "Bad Request" });
    }
  }

  public async getUser(req: Request, res: Response) {
    try {
      const userRepostitories = new UserRepositories();

      let user = await userRepostitories.getUsers();

      res.status(200).json(user);
    } catch (error) {
      res.status(500).send({
        message: "Internal server error",
      });
    }
  }

  public async getPostForUser(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const userRepositories = new UserRepositories();

      const postResults = await userRepositories.getPostsUser(id);

      res.status(200).send(postResults);
    } catch (error) {
      res.status(400).send({
        message: "Bad Request!",
      });
    }
  }

  public async getUserById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      const userRepostitories = new UserRepositories();

      let getterUser = await userRepostitories.getUsersById(id);

      res.status(200).send(getterUser);
    } catch (error) {
      res.status(500).send({
        message: "Internal Server Error!",
      });
    }
  }

  public async updatedUsers(req: Request, res: Response) {
    const { id } = req.params;
    const { name } = req.body;

    try {
      const userRepostitories = new UserRepositories();

      await userRepostitories.updated(name, id);

      res.status(200).send({ message: "Usuario atualizado com sucesso!" });
    } catch (error) {
      res.status(500).send({ message: "Internal server error!" });
    }
  }

  public async deleteUser(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const userRepostitories = new UserRepositories();

      await userRepostitories.delete(id);

      res.status(200).send({ message: "Usuario deletado!" });
    } catch (error) {
      res.status(500).send({
        message: "Internal server error!",
      });
    }
  }

  public async singUp(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { email, password } = req.body;

    const verifyUserAlredyExists = prisma.user.findMany({
      where: {
        email: email,
        password: password,
      },
    });

    if (!verifyUserAlredyExists) {
      res.status(200).send({
        message: "Usuario não existe!",
      });
    }

    const privateKey = "shhhsaf124";
    const token = sign({ email: verifyUserAlredyExists }, privateKey);

    const verifyToken = verify(token, privateKey);
    try {
      next();
      res.status(200).send({ message: "Logado" });
    } catch (error) {
      res.status(400).send({
        message: "Bad Request",
      });
    }
  }
}
