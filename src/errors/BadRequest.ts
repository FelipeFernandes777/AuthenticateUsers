import { DefaultError } from "./DefaultError";

export class BadRequest extends DefaultError {
  constructor(status: number = 404, message: string = "Bad Request") {
    super(status, message);
  }
}
