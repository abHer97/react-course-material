import { IRequestParams } from '../../shared/domain/entities/request-params';
import { IPersonCombinedCredits } from '../domain/entities/person-credits';
import { IPersonDataSource } from '../domain/entities/person-data-source';
import { IPersonDetails } from '../domain/entities/person-details';
import { IPersonService } from '../domain/entities/person-service';
import { parsePersonCombinedCreditsResponse } from '../domain/validations/person-credits-validation';
import { parsePersonDetails } from '../domain/validations/person-details-validation';

export class PersonService implements IPersonService {
  constructor(private readonly dataSource: IPersonDataSource) {}

  async getDetails(data: { personId: number } & IRequestParams): Promise<IPersonDetails> {
    const resp = await this.dataSource.getDetails(data);

    return parsePersonDetails(resp);
  }

  async getCombinedCredits(
    data: { personId: number } & IRequestParams
  ): Promise<IPersonCombinedCredits[]> {
    const resp = await this.dataSource.getCombinedCredits(data);

    return parsePersonCombinedCreditsResponse(resp).cast;
  }
}
