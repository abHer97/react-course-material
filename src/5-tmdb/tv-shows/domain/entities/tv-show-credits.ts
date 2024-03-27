export interface ITvShowCredits {
  cast: ITvShowCreditCast[];
  id: number;
}

// interface Crew {
//   adult: boolean;
//   gender: number;
//   id: number;
//   known_for_department: string;
//   name: string;
//   original_name: string;
//   popularity: number;
//   profile_path?: string;
//   credit_id: string;
//   department: string;
//   job: string;
// }

export interface ITvShowCreditCast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  character: string;
  credit_id: string;
  order: number;
}
