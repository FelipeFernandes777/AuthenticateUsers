import { User } from "@prisma/client";
import { IUserRepositories } from "../interfaces/IUserRepositories";
import { prisma } from "../database";
import { hash } from "bcrypt";

export class UserRepositories implements IUserRepositories {
  constructor() {}

  public async getUsers(take: number, skip: number): Promise<User[]> {
    const getUsers: User[] | any[] = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        post: false,
        password: false,
      },
      take: take,
      skip: skip,
    });

    prisma.user.count();

    return getUsers;
  }

  public async getUsersById(userId: string): Promise<User | null> {
    const getUserById: any = prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        post: true,
        password: false,
      },
    });

    return getUserById;
  }

  public async getPostsUser(userId: string): Promise<any> {
    const getPosts = await prisma.user.findMany({
      where: {
        id: userId,
      },
      select: {
        id: false,
        name: true,
        email: true,
        password: false,
        post: true,
      },
    });

    return getPosts;
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
      select: {
        id: true,
        name: true,
        email: true,
        password: false,
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
