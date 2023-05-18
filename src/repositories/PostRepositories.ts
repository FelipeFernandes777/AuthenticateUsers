import { Post } from "@prisma/client";
import { IPostRepositories } from "../interfaces/IPostRepositories";
import { prisma } from "../database";

export class PostRepositories implements IPostRepositories {
  constructor() {}

  public async list(): Promise<Post[]> {
    const listPosts = await prisma.post.findMany({
      include: {
        User: {
          select: {
            name: true,
            email: false,
            id: false,
            password: false,
          },
        },
      },
    });

    return listPosts;
  }

  public async create(
    title: string,
    content: string,
    description?: string,
    userId?: string
  ): Promise<Post> {
    const postCreated = await prisma.post.create({
      data: {
        title,
        content,
        description,
        userId,
      },
    });

    return postCreated;
  }

  public async update(
    id: string,
    title: string,
    content: string,
    description?: string | null | undefined
  ): Promise<void> {
    await prisma.post.update({
      where: {
        id,
      },
      data: {
        title,
        content,
        description,
      },
    });
  }

  public async delete(id: string): Promise<void> {
    await prisma.post.delete({
      where: {
        id,
      },
    });
  }
}
