import * as z from "zod";
export const SignUpValidation = z.object({
  name: z.string().min(2, { message: "Tooi short" }),
  username: z.string().min(2).max(50, { message: "too short" }),
  email: z.string().email(),
  password: z.string().min(8, { message: "password must be  character" }),
});
