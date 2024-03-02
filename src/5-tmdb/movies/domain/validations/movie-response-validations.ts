import { array, parse } from 'valibot';

import { createPaginationSchema } from '../../../tv-shows/domain/validations/pagination-validations';
import { IMovieResponse } from '../entities/movie-response';
import { partialMovieSchema } from './movie-validations';

export function validatePartialMovieResponse(data: unknown): asserts data is IMovieResponse {
  const schema = createPaginationSchema(array(partialMovieSchema));

  parse(schema, data);
}
