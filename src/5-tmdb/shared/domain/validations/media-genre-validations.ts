import { number, object, string } from 'valibot';

export const mediaGenreSchema = object({
  id: number(),
  name: string(),
});
