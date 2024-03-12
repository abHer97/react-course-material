import { array, number, object, parse } from 'valibot';

import { createPaginationSchema } from '../../../tv-shows/domain/validations/pagination-validations';
import { IMovieCreditsResponse, IPartialMovieResponse } from '../entities/movie-response';
import { partialMovieSchema } from './movie-partial-validations';
import { movieCreditSchema } from './movie-credits-validations';

export function validatePartialMovieResponse(data: unknown): asserts data is IPartialMovieResponse {
  const schema = createPaginationSchema(array(partialMovieSchema));

  parse(schema, data);
}

const movieCreditsResponseSchema = object({
  id: number(),
  cast: array(movieCreditSchema),
});

export function parseMovieCreditsResponse(data: unknown): IMovieCreditsResponse {
  return parse(movieCreditsResponseSchema, data);
}
