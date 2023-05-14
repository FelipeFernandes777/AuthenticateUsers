import { Request, Response } from "express";
import { UserRepositories } from "../repositories/UserRepositorie";
import { prisma } from "../database";

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
}
