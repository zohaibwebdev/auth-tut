import * as z from "zod";
export const LoginScheme = z.object({
  email: z.string().email(),
  password: z.string(),
});
