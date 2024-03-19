import { IHttpClient } from '../../../shared/domain/entities/http-client';
import { IAccountDataSource } from '../../domain/entities/account-data-source';
import { IFavoritePayload } from '../../domain/entities/favorite-payload';
import { IWatchlistPayload } from '../../domain/entities/watchlist-payload';

export class AccountApiDataSource implements IAccountDataSource {
  constructor(private readonly httpClient: IHttpClient, private readonly accountId: number) {}

  addFavorite(data: IFavoritePayload): Promise<unknown> {
    return this.httpClient
      .post(`/account/${this.accountId}/favorite`, { body: data })
      .then((resp) => resp.data);
  }

  addWatchlist(data: IWatchlistPayload): Promise<unknown> {
    return this.httpClient
      .post(`/account/${this.accountId}/favorite`, { body: data })
      .then((resp) => resp.data);
  }
}
