import { IRequestParams } from '../../../shared/domain/entities/request-params';

export interface IPersonDataSource {
  getDetails(data: { personId: number } & IRequestParams): Promise<unknown>;
  getCombinedCredits(data: { personId: number } & IRequestParams): Promise<unknown>;
}
