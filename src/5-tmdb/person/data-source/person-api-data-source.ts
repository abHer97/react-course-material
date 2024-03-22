import { IHttpClient } from '../../shared/domain/entities/http-client';
import { IPersonDataSource } from '../domain/entities/person-data-source';
import { IRequestParams } from '../../shared/domain/entities/request-params';

export class PersonApiDataSource implements IPersonDataSource {
  constructor(private readonly httpClient: IHttpClient) {}

  getDetails(data: { personId: number } & IRequestParams): Promise<unknown> {
    const params = {
      language: data.language || 'es-MX',
    };

    return this.httpClient.get('/person', { id: data.personId, params }).then((resp) => resp.data);
  }
}
