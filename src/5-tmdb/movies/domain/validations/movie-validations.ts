import { array, boolean, number, object, parse, string } from 'valibot';

import { IMovie } from '../entities/movie';

const genreSchema = object({
  id: number(),
  name: string(),
});

// const productionCompanySchema = object({
//   id: number(),
//   logo_path: optional(string()),
//   name: string(),
//   origin_country: string(),
// });

// const productionCountrySchema = object({
//   iso_3166_1: string(),
//   name: string(),
// });

const spokenLanguageSchema = object({
  english_name: string(),
  iso_639_1: string(),
  name: string(),
});

export const movieSchema = object({
  adult: boolean(),
  backdrop_path: string(),
  id: number(),
  title: string(),
  original_language: string(),
  original_title: string(),
  overview: string(),
  poster_path: string(),
  popularity: number(),
  release_date: string(),
  video: boolean(),
  vote_average: number(),
  vote_count: number(),
  budget: number(),
  genres: array(genreSchema),
  homepage: string(),
  imdb_id: string(),
  revenue: number(),
  runtime: number(),
  spoken_languages: array(spokenLanguageSchema),
  status: string(),
  tagline: string(),
});

export function validateMovie(data: unknown): asserts data is IMovie {
  parse(movieSchema, data);
}

export function isMovie(data: unknown): data is IMovie {
  try {
    parse(movieSchema, data);
    return true;
  } catch {
    return false;
  }
}

export function parseMovie(data: unknown): IMovie {
  return parse(movieSchema, data);
}
