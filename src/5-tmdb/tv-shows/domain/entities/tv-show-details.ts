import { IMediaGenre } from '../../../shared/domain/entities/media-genre';
import { INetwork } from '../../../shared/domain/entities/network';
import { ISpokenLanguage } from '../../../shared/domain/entities/spoken-language';
import { ICreatedBy } from './created-by';
import { ILastEpisodeToAir } from './last-episode-to-air';
import { ITvShowSeason } from './tv-show-season';

export interface ITvShowDetails {
  adult: boolean;
  backdrop_path: string;
  created_by: ICreatedBy[];
  episode_run_time: unknown[];
  first_air_date: string;
  genres: IMediaGenre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: ILastEpisodeToAir;
  name: string;
  next_episode_to_air?: null;
  networks: INetwork[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  seasons: ITvShowSeason[];
  spoken_languages: ISpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}
