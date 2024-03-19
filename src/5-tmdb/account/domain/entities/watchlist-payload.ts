import { MediaType } from '../../../shared/domain/entities/media-type';

export interface IWatchlistPayload {
  media_type: MediaType;
  media_id: number;
  watchlist: boolean;
}
