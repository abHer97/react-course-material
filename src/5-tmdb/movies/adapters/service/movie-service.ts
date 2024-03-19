import { number, object, optional, parse } from 'valibot';

import { IMovie } from '../../domain/entities/movie';
import { IMovieCreditsResponse, IPartialMovieResponse } from '../../domain/entities/movie-response';
import { IMovieDataSource } from '../../domain/entities/movie-data-source';
import { IMovieParams } from '../../domain/entities/movie-params';
import { IMovieRequestOptions } from '../../domain/entities/movie-request-options';
import { IMovieService } from '../../domain/entities/movie-service';
import { movieParamsSchema } from '../../domain/validations/movie-params-validations';
import { parseMovie } from '../../domain/validations/movie-validations';
import {
  parseMovieCreditsResponse,
  validatePartialMovieResponse,
} from '../../domain/validations/movie-response-validations';

const movideDetailsOptionsSchema = object({
  movieId: number(),
  params: optional(movieParamsSchema),
});

export class MovieService implements IMovieService {
  constructor(private readonly dataSource: IMovieDataSource) {}

  async getTrendingMovies(options: {
    params?: IMovieParams;
    periodTyme?: 'day' | 'week';
  }): Promise<IPartialMovieResponse> {
    const response = await this.dataSource.getTrendingMovies(options);

    validatePartialMovieResponse(response);

    return response;
  }

  async getMovieDetails(options: {
    movieId: number;
    params?: IMovieParams | undefined;
  }): Promise<IMovie> {
    parse(movideDetailsOptionsSchema, options);

    const response = await this.dataSource.getMovieDetails(options);

    return parseMovie(response);
  }

  async getMovieCredits(
    options: IMovieRequestOptions & { movieId: number }
  ): Promise<IMovieCreditsResponse> {
    const parsedOptions = parse(movideDetailsOptionsSchema, options);

    const response = await this.dataSource.getMovieCredits(parsedOptions);

    return parseMovieCreditsResponse(response);
  }
}
