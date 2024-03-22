import { array, boolean, nullable, number, object, parse, string } from 'valibot';
import { IPersonDetails } from '../entities/person-details';
import { genreSchema } from '../../../shared/domain/validations/genre-validations';

const personDetailsSchema = object({
  adult: boolean(),
  also_known_as: array(string()),
  biography: string(),
  birthday: string(),
  deathday: nullable(string()),
  gender: genreSchema,
  homepage: nullable(string()),
  id: number(),
  imdb_id: string(),
  known_for_department: string(),
  name: string(),
  place_of_birth: string(),
  popularity: number(),
  profile_path: string(),
});

export function parsePersonDetails(data: unknown): IPersonDetails {
  return parse(personDetailsSchema, data);
}
