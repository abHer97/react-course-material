import { IPersonDetails } from './person-details';
import { IRequestParams } from '../../../shared/domain/entities/request-params';
import { IPersonCombinedCredits } from './person-credits';

export interface IPersonService {
  getDetails(data: { personId: number } & IRequestParams): Promise<IPersonDetails>;
  getCombinedCredits(
    data: { personId: number } & IRequestParams
  ): Promise<IPersonCombinedCredits[]>;
}
