import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "nameRequired"),
  email: z
    .string()
    .trim()
    .min(1, "emailRequired")
    .max(254, "tooLong")
    .pipe(z.email("emailInvalid")),
  message: z.string().trim().min(1, "messageRequired").max(5000, "tooLong"),
});

export type ContactValues = z.infer<typeof contactSchema>;
