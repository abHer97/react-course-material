import { array, boolean, enum_, number, object, parse, string } from 'valibot';

import { IPartialMovie } from '../entities/movie';
import { MediaType } from '../../../shared/domain/entities/media-type';

export const partialMovieSchema = object({
  adult: boolean(),
  backdrop_path: string(),
  id: number(),
  title: string(),
  original_language: string(),
  original_title: string(),
  overview: string(),
  poster_path: string(),
  media_type: enum_(MediaType),
  genre_ids: array(number()),
  popularity: number(),
  release_date: string(),
  video: boolean(),
  vote_average: number(),
  vote_count: number(),
});

export function isPartialMovie(data: unknown): data is IPartialMovie {
  try {
    parse(partialMovieSchema, data);
    return true;
  } catch {
    return false;
  }
}
