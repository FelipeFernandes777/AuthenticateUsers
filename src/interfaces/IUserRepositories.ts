import { User } from "@prisma/client";

export interface IUserRepositories {
  getUsers(take:number, skip:number): Promise<User[]>;
  getUsersById(userId: string): Promise<User | null>;
  getPostsUser(userId: string): Promise<any>;
  create(
    userName: string,
    userEmail: string,
    userPassword: string
  ): Promise<User>;
  updated(userName: string, id: string): Promise<User>;
  delete(id: string): Promise<void>;
}
