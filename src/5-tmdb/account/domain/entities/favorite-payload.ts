import { MediaType } from '../../../shared/domain/entities/media-type';

export interface IFavoritePayload {
  media_type: MediaType;
  media_id: number;
  favorite: boolean;
}
