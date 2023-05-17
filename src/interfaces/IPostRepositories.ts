import { Post } from "@prisma/client";

export interface IPostRepositories {
  create(
    title: string,
    content: string,
    description?: string | null,
    userId?: string | null
  ): Promise<Post>;
}
