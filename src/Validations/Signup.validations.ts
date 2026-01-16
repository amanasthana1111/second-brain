import { z } from "zod";

const SignupVali = z.object({
  username: z
    .string()
    .min(3, "min 3 char")
    .max(10, "max 10 char"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be at most 20 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
});

export type SignupType = z.infer<typeof SignupVali>;
export { SignupVali };
