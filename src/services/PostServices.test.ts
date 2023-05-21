import { beforeEach, afterEach, describe, it, expect } from "vitest";
import { app } from "../app";
import { prisma } from "../database";
import { PostController } from "../controllers/PostController";

let port: number = 4242;
let server: any;

beforeEach(() => {
  server = app.listen(port);
});

describe("Testing all routes of application", () => {
  it("GET /post/list", async () => {
    await prisma.post.findMany({});
  });
  expect(200);
});

afterEach(() => {
  server.close();
});
