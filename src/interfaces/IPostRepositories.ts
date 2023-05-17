import { Post } from "@prisma/client";

export interface IPostRepositories {
  list(): Promise<Post[]>;
  create(
    title: string,
    content: string,
    description?: string | null,
    userId?: string | null
  ): Promise<Post>;
  update(
    id: string,
    title: string,
    content: string,
    description?: string | null
  ): Promise<void>;
  delete(id: string): Promise<void>;
}
