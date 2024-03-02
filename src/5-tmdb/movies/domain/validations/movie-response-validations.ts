import { array, parse } from 'valibot';

import { createPaginationSchema } from '../../../tv-shows/domain/validations/pagination-validations';
import { IMovieResponse } from '../entities/movie-response';
import { movieSchema } from './movie-validations';

export function validateMovieResponse(data: unknown): asserts data is IMovieResponse {
  const schema = createPaginationSchema(array(movieSchema));

  parse(schema, data);
}
