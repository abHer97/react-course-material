export interface IHttpClientConfig {
  baseUrl: string;
  headers?: Record<string, string> | (() => Record<string, string>);
}

export interface IHttpClientRequestConfig {
  params?: Record<string, string>;
  id?: string | number;
}

export interface IHttpClientResponse<T> {
  status: number;
  statusText: string;
  data: T;
}

export interface IHttpClient {
  get<T>(uri?: string, params?: IHttpClientRequestConfig): Promise<IHttpClientResponse<T>>;
}
