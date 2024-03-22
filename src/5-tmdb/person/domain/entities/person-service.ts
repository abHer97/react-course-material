import { IPersonDetails } from './person-details';
import { IRequestParams } from '../../../shared/domain/entities/request-params';

export interface IPersonService {
  getDetails(data: { personId: number } & IRequestParams): Promise<IPersonDetails>;
}
