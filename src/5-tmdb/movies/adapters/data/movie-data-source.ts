import { IHttpClient } from '../../../shared/domain/entities/http-client';
import { IMovieDataSource } from '../../domain/entities/movie-data-source';
import { IMovieParams } from '../../domain/entities/movie-params';
import { IMovieRequestOptions } from '../../domain/entities/movie-request-options';

export class MovieDataSource implements IMovieDataSource {
  private readonly uri = '/movie';
  constructor(private readonly httpClient: IHttpClient) {}
  getMovieAccountStates(options: IMovieRequestOptions & { movieId: number }): Promise<unknown> {
    const { movieId, params } = options;

    return this.httpClient
      .get(`/movie/${movieId}/account_states`, { params: this.parseParams(params) })
      .then((resp) => resp.data);
  }

  getTrendingMovies(options?: {
    params?: IMovieParams;
    periodTyme?: 'day' | 'week';
  }): Promise<unknown> {
    return this.httpClient
      .get(`/trending/movie/${options?.periodTyme || 'day'}`, {
        params: this.parseParams(options?.params || { language: 'es-MX' }),
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
        params: this.parseParams(params || { language: 'es-MX' }),
      })
      .then((resp) => resp.data);
  }

  getMovieCredits({
    movieId,
    params,
  }: IMovieRequestOptions & { movieId: number }): Promise<unknown> {
    return this.httpClient
      .get(`${this.uri}/${movieId}/credits`, {
        params: this.parseParams(params || { language: 'es-MX' }),
      })
      .then((resp) => resp.data);
  }

  private parseParams(params?: IMovieParams): Record<string, string> | undefined {
    if (!params) return;

    const parsedParams: Record<string, string> = {};

    if (params.language) {
      parsedParams.language = params.language;
    }

    return parsedParams;
  }
}
