import { array, boolean, number, object, parse, string } from 'valibot';
import { mediaGenreSchema } from '../../../shared/domain/validations/media-genre-validations';
import { networkSchema } from '../../../shared/domain/validations/network-validations';
import { ITvShowDetails } from '../entities/tv-show-details';

const createdBySchema = object({
  id: number(),
  credit_id: string(),
  name: string(),
  gender: number(),
  profile_path: string(),
});

const lastEpisodeToAirSchema = object({
  id: number(),
  name: string(),
  overview: string(),
  vote_average: number(),
  vote_count: number(),
  air_date: string(),
  episode_number: number(),
  episode_type: string(),
  production_code: string(),
  runtime: number(),
  season_number: number(),
  show_id: number(),
  still_path: string(),
});

const tvShowSeasonSchema = object({
  air_date: string(),
  episode_count: number(),
  id: number(),
  name: string(),
  overview: string(),
  poster_path: string(),
  season_number: number(),
  vote_average: number(),
});

const spokenLanguageSchema = object({
  english_name: string(),
  iso_639_1: string(),
  name: string(),
});

const tvShowDetailsSchema = object({
  adult: boolean(),
  backdrop_path: string(),
  created_by: array(createdBySchema),
  first_air_date: string(),
  genres: array(mediaGenreSchema),
  homepage: string(),
  id: number(),
  in_production: boolean(),
  languages: array(string()),
  last_air_date: string(),
  last_episode_to_air: lastEpisodeToAirSchema,
  name: string(),
  networks: array(networkSchema),
  number_of_episodes: number(),
  number_of_seasons: number(),
  origin_country: array(string()),
  original_language: string(),
  original_name: string(),
  overview: string(),
  popularity: number(),
  poster_path: string(),
  seasons: array(tvShowSeasonSchema),
  spoken_languages: array(spokenLanguageSchema),
  status: string(),
  tagline: string(),
  type: string(),
  vote_average: number(),
  vote_count: number(),
});

export function parseTvShowDetails(data: unknown): ITvShowDetails {
  return parse(tvShowDetailsSchema, data);
}
