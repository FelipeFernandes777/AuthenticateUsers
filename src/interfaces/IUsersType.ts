import { string, z } from "zod";

const createdUser = z.object({
  name: string()
    .min(3, { message: "O nome é invalido!" })
    .max(254, { message: "O nome é invalido!" }),
  email: string().email(),
  password: string().min(8, { message: "Senha muito curta" }).max(254),
});

type user = z.infer<typeof createdUser> | null;

export { user };
