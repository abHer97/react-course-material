import { boolean, number, object, parse } from 'valibot';
import { IWatchlistPayload } from '../entities/watchlist-payload';
import { mediaTypeSchema } from '../../../shared/domain/validations/media-type-validations';

const watchlistPayloadSchema = object({
  watchlist: boolean(),
  media_id: number(),
  media_type: mediaTypeSchema,
});

export function parseWatchlistPayload(data: unknown): IWatchlistPayload {
  return parse(watchlistPayloadSchema, data);
}
