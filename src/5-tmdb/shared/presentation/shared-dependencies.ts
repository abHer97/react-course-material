import { HttpClient } from '../infrastructure/http-client/http-client';
import { IHttpClient } from '../domain/entities/http-client';
import { ENV_VARS } from '../../config/env-vars';

interface IDependencies {
  httpClient?: IHttpClient;
}

const dependencies: IDependencies = {};

function createHttpClient() {
  const headers: Record<string, string> = {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzA2NjgwNWQ1ODc3ZjcyNDE2OWM2N2JiZTU1M2RkMSIsInN1YiI6IjY1YjFlYmU2Mjg2NmZhMDE3YmUzOGM2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.73b0d7FhSi2fADcyEf_2qT8pWaiNu9ve6tWM0jIGc3k',
  };

  return new HttpClient({ baseUrl: ENV_VARS.baseUrl, headers });
}

export const sharedDependencies = {
  get httpClient(): IHttpClient {
    if (!dependencies.httpClient) {
      dependencies.httpClient = createHttpClient();
    }

    return dependencies.httpClient;
  },
};
