import {
  IHttpClient,
  IHttpClientConfig,
  IHttpClientRequestConfig,
  IHttpClientResponse,
} from '../../domain/entities/http-client';
import { isFunction } from '../../domain/validations/function';
import axios, { AxiosHeaders, AxiosInstance } from 'axios';

export class HttpClient implements IHttpClient {
  private readonly axios: AxiosInstance;

  constructor(config?: IHttpClientConfig) {
    this.axios = axios.create({
      baseURL: config?.baseUrl,
      headers:
        config && config.headers
          ? isFunction(config.headers)
            ? (config.headers() as unknown as AxiosHeaders)
            : (config.headers as unknown as AxiosHeaders)
          : undefined,
    });
  }

  async get<T>(uri = '', config?: IHttpClientRequestConfig): Promise<IHttpClientResponse<T>> {
    return this.axios.get(uri, { params: config?.params }).then((resp) => {
      return {
        data: resp.data as T,
        status: resp.status,
        statusText: resp.statusText,
      };
    });
  }
}
