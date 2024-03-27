import { IHttpClient } from '../../../shared/domain/entities/http-client';
import { IRequestParams } from '../../../shared/domain/entities/request-params';
import { ITvShowDataSource } from '../../domain/entities/tv-show-data-source';

export class TvShowApiDataSource implements ITvShowDataSource {
  private readonly uri = '/tv';
  constructor(private readonly httpClient: IHttpClient) {}

  getDetails(params: { tvShowId: number } & IRequestParams): Promise<unknown> {
    return this.httpClient
      .get(this.uri, { id: params.tvShowId, params: this.formatParams(params) })
      .then((resp) => resp.data);
  }

  getCredits(params: { tvShowId: number } & IRequestParams): Promise<unknown> {
    return this.httpClient
      .get(`${this.uri}/${params.tvShowId}/credits`, { params: this.formatParams(params) })
      .then((resp) => resp.data);
  }

  private formatParams(params?: IRequestParams) {
    if (!params) return;

    return {
      language: params.language || 'es-MX',
    };
  }
}
