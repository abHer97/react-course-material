import { MediaType } from '../../../shared/domain/entities/media-type';

export interface IPartialMovie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: MediaType; //
  genre_ids: number[]; //
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovie extends Omit<IPartialMovie, 'media_type' | 'genre_ids'> {
  // adult: boolean;
  // backdrop_path: string;
  // TODO: Verify the type of below field
  // belongs_to_collection?: any;
  // id: number;
  // original_language: string;
  // original_title: string;
  // overview: string;
  // popularity: number;
  // poster_path: string;
  // release_date: string;
  // title: string;
  // video: boolean;
  // vote_average: number;
  // vote_count: number;
  budget: number;
  genres: Genre[];
  homepage: string;
  imdb_id: string;
  production_companies: Productioncompany[];
  production_countries: Productioncountry[];
  revenue: number;
  runtime: number;
  spoken_languages: Spokenlanguage[];
  status: string;
  tagline: string;
}

interface Spokenlanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface Productioncountry {
  iso_3166_1: string;
  name: string;
}

interface Productioncompany {
  id: number;
  logo_path?: string;
  name: string;
  origin_country: string;
}

interface Genre {
  id: number;
  name: string;
}
