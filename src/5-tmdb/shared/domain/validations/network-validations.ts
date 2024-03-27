import { number, object, string } from 'valibot';

export const networkSchema = object({
  id: number(),
  logo_path: string(),
  name: string(),
  origin_country: string(),
});
