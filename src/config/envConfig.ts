import { z } from "zod";

const envSchema = z.object({
  MONGODB_URI: z.string().min(1),
  JWT_PASS: z.string().min(10),
});

export const env = envSchema.parse(process.env);
