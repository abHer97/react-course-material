import { array, boolean, nullable, number, object, optional, parse, string } from 'valibot';

import { IPersonCombinedCredits } from '../entities/person-credits';
import { mediaTypeSchema } from '../../../shared/domain/validations/media-type-validations';

const personCombinedCreditSchema = object({
  adult: boolean(),
  backdrop_path: nullable(string()),
  genre_ids: array(number()),
  id: number(),
  original_language: string(),
  original_title: optional(string()),
  overview: string(),
  popularity: number(),
  poster_path: nullable(string()),
  release_date: optional(string()),
  first_air_date: optional(string()),
  title: optional(string()),
  name: optional(string()),
  video: optional(boolean()),
  episode_count: optional(number()),
  vote_average: number(),
  vote_count: number(),
  character: string(),
  credit_id: string(),
  order: optional(number()),
  media_type: mediaTypeSchema,
});

export function parsePersonCombinedCredits(data: unknown): IPersonCombinedCredits[] {
  return parse(array(personCombinedCreditSchema), data);
}

export function parsePersonCombinedCreditsResponse(data: unknown): {
  id: number;
  cast: IPersonCombinedCredits[];
} {
  return parse(object({ id: number(), cast: array(personCombinedCreditSchema) }), data);
}
