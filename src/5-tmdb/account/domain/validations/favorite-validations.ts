import { boolean, number, object, parse, string } from 'valibot';
import { IFavoritePayload } from '../entities/favorite-payload';
import { mediaTypeSchema } from '../../../shared/domain/validations/media-type-validations';
import { IFavoriteResponse } from '../entities/favorite-response';

const favoritePayloadSchema = object({
  favorite: boolean(),
  media_id: number(),
  media_type: mediaTypeSchema,
});

const favoriteResponseSchema = object({
  status_code: number(),
  status_message: string(),
  success: boolean(),
});

export function validateFavoritePayload(data: unknown): asserts data is IFavoritePayload {
  parse(favoritePayloadSchema, data);
}
export function parseFavoritePayload(data: unknown): IFavoritePayload {
  return parse(favoritePayloadSchema, data);
}

export function validateFavoriteResponse(data: unknown): asserts data is IFavoriteResponse {
  parse(favoriteResponseSchema, data);
}
export function parseFavoriteResponse(data: unknown): IFavoriteResponse {
  return parse(favoriteResponseSchema, data);
}
