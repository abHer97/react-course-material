import { IMovieDataSource } from '../../domain/entities/movie-data-source';
import { IMovieParams } from '../../domain/entities/movie-params';
import { IMovieResponse } from '../../domain/entities/movie-response';
import { IMovieService } from '../../domain/entities/movie-service';
import { validateMovieResponse } from '../../domain/validations/movie-response-validations';

export class MovieService implements IMovieService {
  constructor(private readonly dataSource: IMovieDataSource) {}

  async getTrendingMovies(options: {
    params?: IMovieParams;
    periodTyme?: 'day' | 'week';
  }): Promise<IMovieResponse> {
    const response = await this.dataSource.getTrendingMovies(options);

    validateMovieResponse(response);

    return response;
  }
}
