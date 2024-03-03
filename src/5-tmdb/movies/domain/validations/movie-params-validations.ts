import { object, optional, string } from 'valibot';

export const movieParamsSchema = object({
  language: optional(string()),
});
