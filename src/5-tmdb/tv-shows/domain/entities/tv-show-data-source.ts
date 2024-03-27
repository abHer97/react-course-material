import { IRequestParams } from '../../../shared/domain/entities/request-params';

export interface ITvShowDataSource {
  getDetails(params: { tvShowId: number } & IRequestParams): Promise<unknown>;
  getCredits(params: { tvShowId: number } & IRequestParams): Promise<unknown>;
}
