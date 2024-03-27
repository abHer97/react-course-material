import { IRequestParams } from '../../../shared/domain/entities/request-params';
import { ITvShowCredits } from './tv-show-credits';
import { ITvShowDetails } from './tv-show-details';

export interface ITvShowService {
  getDetails(params: { tvShowId: number } & IRequestParams): Promise<ITvShowDetails>;
  getCredits(params: { tvShowId: number } & IRequestParams): Promise<ITvShowCredits>;
}
