import { IFavoritePayload } from './favorite-payload';
import { IFavoriteResponse } from './favorite-response';
import { IWatchlistPayload } from './watchlist-payload';

export interface IAccountService {
  addFavorite(data: IFavoritePayload): Promise<IFavoriteResponse>;
  addWatchlist(data: IWatchlistPayload): Promise<IFavoriteResponse>;
}
