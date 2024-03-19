import { enum_ } from 'valibot';
import { MediaType } from '../entities/media-type';

export const mediaTypeSchema = enum_(MediaType);
