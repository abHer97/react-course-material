import { IMovie } from './movie';
import { IMovieParams } from './movie-params';
import { IPartialMovieResponse } from './movie-response';

export interface IMovieService {
  getTrendingMovies(options?: {
    params?: IMovieParams;
    periodTyme?: 'day' | 'week';
  }): Promise<IPartialMovieResponse>;
  getMovieDetails(options: { movieId: number; params?: IMovieParams }): Promise<IMovie>;
}
