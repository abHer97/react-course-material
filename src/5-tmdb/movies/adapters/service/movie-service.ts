import { IMovie } from '../../domain/entities/movie';
import { IMovieDataSource } from '../../domain/entities/movie-data-source';
import { IMovieParams } from '../../domain/entities/movie-params';
import { IMovieService } from '../../domain/entities/movie-service';
import { IPartialMovieResponse } from '../../domain/entities/movie-response';
import { parseMovie } from '../../domain/validations/movie-validations';
import { validatePartialMovieResponse } from '../../domain/validations/movie-response-validations';
import { number, object, optional, parse } from 'valibot';
import { movieParamsSchema } from '../../domain/validations/movie-params-validations';

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
}
