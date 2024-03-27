import { IRequestParams } from '../../../shared/domain/entities/request-params';
import { ITvShowCredits } from '../../domain/entities/tv-show-credits';
import { ITvShowDataSource } from '../../domain/entities/tv-show-data-source';
import { ITvShowDetails } from '../../domain/entities/tv-show-details';
import { ITvShowService } from '../../domain/entities/tv-show-service';
import { parseTvshowCredits } from '../../domain/validations/tv-show-credits-validations';
import { parseTvShowDetails } from '../../domain/validations/tv-show-details-validations';

export class TvShowService implements ITvShowService {
  constructor(private readonly dataSource: ITvShowDataSource) {}

  async getDetails(params: { tvShowId: number } & IRequestParams): Promise<ITvShowDetails> {
    const resp = await this.dataSource.getDetails(params);

    return parseTvShowDetails(resp);
  }

  async getCredits(params: { tvShowId: number } & IRequestParams): Promise<ITvShowCredits> {
    const resp = await this.dataSource.getCredits(params);

    return parseTvshowCredits(resp);
  }
}
