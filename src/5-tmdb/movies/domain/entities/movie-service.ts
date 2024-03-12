import { IMovie } from './movie';
import { IMovieRequestOptions } from './movie-request-options';
import { IMovieCreditsResponse, IPartialMovieResponse } from './movie-response';

export interface IMovieService {
  getTrendingMovies(
    options?: IMovieRequestOptions & {
      periodTyme?: 'day' | 'week';
    }
  ): Promise<IPartialMovieResponse>;
  getMovieDetails(options: IMovieRequestOptions & { movieId: number }): Promise<IMovie>;
  getMovieCredits(
    options: IMovieRequestOptions & { movieId: number }
  ): Promise<IMovieCreditsResponse>;
}
