import { Response } from "express";

export class DefaultError extends Error {
  public status: number = 500;
  public message: string = "Internal Server Error";

  constructor(statusCode: number, message: string) {
    super();
    this.status = statusCode;
    this.message = message;
  }

  public sendError(res: Response) {
    res.status(this.status).send({
      error: this.status || 500,
      message: this.message,
    });
  }
}
