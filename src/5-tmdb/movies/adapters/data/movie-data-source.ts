import { IHttpClient } from '../../../shared/domain/entities/http-client';
import { IMovieDataSource } from '../../domain/entities/movie-data-source';
import { IMovieParams } from '../../domain/entities/movie-params';

export class MovieDataSource implements IMovieDataSource {
  private readonly uri = '/movie';
  constructor(private readonly httpClient: IHttpClient) {}

  getTrendingMovies(options?: {
    params?: IMovieParams;
    periodTyme?: 'day' | 'week';
  }): Promise<unknown> {
    return this.httpClient
      .get(`/trending/movie/${options?.periodTyme || 'day'}`, {
        params: (options?.params || { language: 'es-MX' }) as Record<string, string>,
      })
      .then((resp) => resp.data);
  }

  getMovieDetails({
    movieId,
    params,
  }: {
    movieId: number;
    params?: IMovieParams | undefined;
  }): Promise<unknown> {
    return this.httpClient
      .get(this.uri, {
        id: movieId,
        params: (params || {}) as Record<string, string>,
      })
      .then((resp) => resp.data);
  }
}
