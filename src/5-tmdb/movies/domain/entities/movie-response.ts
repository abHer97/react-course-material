import { IPartialMovie } from './movie';
import { IPaginatedResponse } from '../../../tv-shows/domain/entities/response';

export interface IMovieResponse extends IPaginatedResponse<IPartialMovie[]> {}
