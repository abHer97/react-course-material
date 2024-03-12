import { IMovieRequestOptions } from './movie-request-options';

export interface IMovieDataSource {
  getTrendingMovies(
    options?: IMovieRequestOptions & { periodTyme?: 'day' | 'week' }
  ): Promise<unknown>;
  getMovieDetails(options: IMovieRequestOptions & { movieId: number }): Promise<unknown>;
  getMovieCredits(options: IMovieRequestOptions & { movieId: number }): Promise<unknown>;
}
