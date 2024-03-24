import { IHttpClient } from '../../shared/domain/entities/http-client';
import { IPersonDataSource } from '../domain/entities/person-data-source';
import { IRequestParams } from '../../shared/domain/entities/request-params';

export class PersonApiDataSource implements IPersonDataSource {
  constructor(private readonly httpClient: IHttpClient) {}

  getDetails(data: { personId: number } & IRequestParams): Promise<unknown> {
    const params = this.formatParams(data);

    return this.httpClient.get('/person', { id: data.personId, params }).then((resp) => resp.data);
  }

  getCombinedCredits(data: { personId: number } & IRequestParams): Promise<unknown> {
    const params = this.formatParams(data);

    return this.httpClient
      .get(`/person/${data.personId}/combined_credits`, { params })
      .then((resp) => resp.data);
  }

  private formatParams(params: IRequestParams) {
    return {
      language: params.language || 'es-MX',
    };
  }
}
