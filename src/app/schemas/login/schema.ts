import { z } from "zod";

export const loginFormSchema = z.object({
 id: z.number().optional(),
 email: z.string().email('Email invalid').min(1, 'Field is required'),
 password: z.string().min(5, 'Field password must be at least 5 characters').max(100),
 name: z.string(),
 photo: z.string().optional(),
 status:  z.string().optional(),
})
