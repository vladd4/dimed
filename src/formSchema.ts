import { z } from "zod";

export const formSchema = z.object({
  name: z.string(),
  phone: z
    .string()
    .min(10, { message: "Некоректний формат номеру!" })
    .max(13, { message: "Некоректний формат номеру!" }),
});

export type FormValues = z.infer<typeof formSchema>;
