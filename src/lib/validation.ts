import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, "Preencha o email.")
    .email("Email inválido."),
  password: z
    .string()
    .trim()
    .min(1, "Preencha a senha."),
});

export type LoginValues = z.infer<typeof loginSchema>;
