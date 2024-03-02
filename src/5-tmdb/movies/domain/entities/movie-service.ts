import { IMovieParams } from './movie-params';
import { IMovieResponse } from './movie-response';

export interface IMovieService {
  getTrendingMovies(options?: {
    params?: IMovieParams;
    periodTyme?: 'day' | 'week';
  }): Promise<IMovieResponse>;
}
