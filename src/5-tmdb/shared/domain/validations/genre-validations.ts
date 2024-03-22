import { enum_ } from 'valibot';

import { Genre } from '../entities/genre';

export const genreSchema = enum_(Genre);
