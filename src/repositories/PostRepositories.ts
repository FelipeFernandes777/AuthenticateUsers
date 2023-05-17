import { Post } from "@prisma/client";
import { IPostRepositories } from "../interfaces/IPostRepositories";
import { prisma } from "../database";

export class PostRepositories implements IPostRepositories {
  constructor() {}

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
}
