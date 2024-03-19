import {
  IHttpClient,
  IHttpClientConfig,
  IHttpClientRequestConfig,
  IHttpClientResponse,
} from '../../domain/entities/http-client';
import { isFunction } from '../../domain/validations/function';
import axios, { AxiosHeaders, AxiosInstance } from 'axios';
import { isString } from '../../domain/validations/string';
import { isNumber } from '../../domain/validations/number';

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
    const { id, params } = config || {};

    const finalUri = uri + (isString(id) || isNumber(id) ? `/${id}` : '');

    return this.axios.get(finalUri, { params: params }).then((resp) => {
      return {
        data: resp.data as T,
        status: resp.status,
        statusText: resp.statusText,
      };
    });
  }

  async post<T>(uri = '', config?: IHttpClientRequestConfig): Promise<IHttpClientResponse<T>> {
    const { id, body, params } = config || {};

    const finalUri = uri + (isString(id) || isNumber(id) ? `/${id}` : '');

    return this.axios.post(finalUri, { params: params, data: body }).then((resp) => {
      return {
        data: resp.data as T,
        status: resp.status,
        statusText: resp.statusText,
      };
    });
  }
}
