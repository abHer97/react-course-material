import { IFavoritePayload } from './favorite-payload';
import { IWatchlistPayload } from './watchlist-payload';

export interface IAccountDataSource {
  addFavorite(data: IFavoritePayload): Promise<unknown>;
  addWatchlist(data: IWatchlistPayload): Promise<unknown>;
}
