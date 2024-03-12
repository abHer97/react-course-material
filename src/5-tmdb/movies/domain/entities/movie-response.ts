import { IPartialMovie } from './movie';
import { IPaginatedResponse } from '../../../tv-shows/domain/entities/response';
import { IMovieCredit } from './movie-credits';

export interface IPartialMovieResponse extends IPaginatedResponse<IPartialMovie[]> {}

export interface IMovieCreditsResponse {
  id: number;
  cast: IMovieCredit[];
}
