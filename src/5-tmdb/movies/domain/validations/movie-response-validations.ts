import { array, parse } from 'valibot';

import { createPaginationSchema } from '../../../tv-shows/domain/validations/pagination-validations';
import { IPartialMovieResponse } from '../entities/movie-response';
import { partialMovieSchema } from './movie-partial-validations';

export function validatePartialMovieResponse(data: unknown): asserts data is IPartialMovieResponse {
  const schema = createPaginationSchema(array(partialMovieSchema));

  parse(schema, data);
}
