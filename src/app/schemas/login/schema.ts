import { z } from "zod";

export const loginFormSchema = z.object({
 id: z.number().optional(),
 email: z.string().email('O campo email é obrigatório').min(1, 'Email inválido'),
 password: z.string().min(5, 'A senha deve conter no mínimo 5 caracteres').max(100),
 name: z.string().min(3, 'O nome deve ter mais de 3 caracteres'),
 photo: z.string().optional(),
 status:  z.string().optional(),
})
