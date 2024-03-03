import { IMovieParams } from './movie-params';

export interface IMovieDataSource {
  getTrendingMovies(options?: {
    params?: IMovieParams;
    periodTyme?: 'day' | 'week';
  }): Promise<unknown>;
  getMovieDetails(options: { movieId: number; params?: IMovieParams }): Promise<unknown>;
}
