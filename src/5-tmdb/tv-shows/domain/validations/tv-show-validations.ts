import { array, boolean, enum_, number, object, parse, string } from 'valibot';

import { ITvShow } from '../entities/tv-show';
import { MediaType } from '../../../shared/domain/entities/media-type';

const tvShowValidationSchema = object({
  adult: boolean(),
  backdrop_path: string(),
  id: number(),
  name: string(),
  original_language: string(),
  original_name: string(),
  overview: string(),
  poster_path: string(),
  media_type: enum_(MediaType),
  genre_ids: array(number()),
  popularity: number(),
  first_air_date: string(),
  vote_average: number(),
  vote_count: number(),
  origin_country: array(string()),
});

export function isTvShow(data: unknown): data is ITvShow {
  try {
    parse(tvShowValidationSchema, data);

    return true;
  } catch {
    return false;
  }
}
