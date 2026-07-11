import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Navn må inneholde minst 2 tegn'),

  email: z.string().email('Skriv inn en gyldig e-postadresse'),

  phone: z
    .string()
    .min(8, 'Telefonnummer må inneholde minst 8 tegn')
    .optional(),

  date: z.string().optional(),

  cakeType: z.string().min(2, 'Velg hvilken type kake du ønsker'),

  message: z
    .string()
    .min(10, 'Beskriv kakeønsket ditt med litt mer informasjon'),

  communication: z.enum(['email', 'phone'], {
    message: 'Velg ønsket kommunikasjonsalternativ',
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
