import { app } from "./app";

const port: number | undefined = 3333 || process.env.PORT;

app.listen(port, () => {
  console.log(`This server is running in localhost://${port}`);
});
