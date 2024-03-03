import { IPartialMovie } from './movie';
import { IPaginatedResponse } from '../../../tv-shows/domain/entities/response';

export interface IPartialMovieResponse extends IPaginatedResponse<IPartialMovie[]> {}
