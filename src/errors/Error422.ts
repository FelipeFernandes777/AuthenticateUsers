import { DefaultError } from "./DefaultError";

export class Error422 extends DefaultError {
  constructor(status: number = 422, message: string = "Unprocessable entity") {
    super(status, message);
  }
}
