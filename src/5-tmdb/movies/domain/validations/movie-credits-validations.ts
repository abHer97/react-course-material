import { boolean, nullable, number, object, parse, string } from 'valibot';
import { IMovieCredit } from '../entities/movie-credits';

export const movieCreditSchema = object({
  adult: boolean(),
  gender: number(),
  id: number(),
  known_for_department: string(),
  name: string(),
  original_name: string(),
  popularity: number(),
  profile_path: nullable(string()),
  cast_id: number(),
  character: string(),
  credit_id: string(),
  order: number(),
});

export function validateMovieCredit(data: unknown): asserts data is IMovieCredit {
  parse(movieCreditSchema, data);
}

export function isMovieCredit(data: unknown): data is IMovieCredit {
  try {
    validateMovieCredit(data);
    return true;
  } catch {
    return false;
  }
}
