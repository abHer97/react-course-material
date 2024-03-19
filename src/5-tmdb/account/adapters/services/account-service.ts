import { IAccountDataSource } from '../../domain/entities/account-data-source';
import { IAccountService } from '../../domain/entities/account-service';
import { IFavoritePayload } from '../../domain/entities/favorite-payload';
import { IFavoriteResponse } from '../../domain/entities/favorite-response';
import { IWatchlistPayload } from '../../domain/entities/watchlist-payload';
import {
  parseFavoritePayload,
  parseFavoriteResponse,
} from '../../domain/validations/favorite-validations';
import { parseWatchlistPayload } from '../../domain/validations/watchlist-validations';

export class AccountService implements IAccountService {
  constructor(private readonly dataSource: IAccountDataSource) {}

  async addFavorite(data: IFavoritePayload): Promise<IFavoriteResponse> {
    const parsedData = parseFavoritePayload(data);

    const rawResponse = await this.dataSource.addFavorite(parsedData);

    return parseFavoriteResponse(rawResponse);
  }

  async addWatchlist(data: IWatchlistPayload): Promise<IFavoriteResponse> {
    const parsedData = parseWatchlistPayload(data);

    const rawResponse = await this.dataSource.addWatchlist(parsedData);

    return parseFavoriteResponse(rawResponse);
  }
}
