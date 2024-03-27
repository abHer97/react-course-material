import { array, boolean, number, object, parse, string } from 'valibot';
import { ITvShowCredits } from '../entities/tv-show-credits';

const castSchema = object({
  adult: boolean(),
  gender: number(),
  id: number(),
  known_for_department: string(),
  name: string(),
  original_name: string(),
  popularity: number(),
  profile_path: string(),
  character: string(),
  credit_id: string(),
  order: number(),
});

const tvShowCreditsSchema = object({
  id: number(),
  cast: array(castSchema),
});

export function parseTvshowCredits(data: unknown): ITvShowCredits {
  return parse(tvShowCreditsSchema, data);
}
