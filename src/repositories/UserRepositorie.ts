import { User } from "@prisma/client";
import { IUserRepositories } from "../interfaces/IUserRepositories";
import { prisma } from "../database";
import { hash } from "bcrypt";

export class UserRepositories implements IUserRepositories {
  constructor() {}

  public async getUsers(): Promise<User[]> {
    const getUsers = await prisma.user.findMany();

    return getUsers;
  }

  public async getUsersById(userId: string): Promise<User | null> {
    const getUserById = prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    return getUserById;
  }

  public async create(
    userName: string,
    userEmail: string,
    userPassword: string
  ): Promise<User> {
    const passwordHash = await hash(userPassword, 8);

    const userCreated = await prisma.user.create({
      data: {
        name: userName,
        email: userEmail,
        password: String(passwordHash),
      },
    });

    return userCreated;
  }

  public async updated(userName: string, id: string): Promise<User> {
    const updatedUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name: userName,
      },
    });

    return updatedUser;
  }

  public async delete(id: string): Promise<void> {
    await prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}
