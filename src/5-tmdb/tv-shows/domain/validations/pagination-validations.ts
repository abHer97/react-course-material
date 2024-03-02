import {
  ArraySchema,
  BaseSchema,
  NumberSchema,
  ObjectEntries,
  ObjectSchema,
  StringSchema,
  number,
  object,
  parse,
} from 'valibot';

import { IPagination } from '../entities/pagination';

export const paginationSchema = object({
  page: number(),
  total_pages: number(),
  total_results: number(),
});

export function createPaginationSchema<T>(
  schema: T extends ObjectEntries
    ? ObjectSchema<T>
    : T extends BaseSchema
    ? ArraySchema<T>
    : NumberSchema | StringSchema
) {
  return object({
    page: number(),
    total_pages: number(),
    total_results: number(),
    results: schema,
  });
}

export function isPagination(data: unknown): data is IPagination {
  try {
    parse(paginationSchema, data);

    return true;
  } catch {
    return false;
  }
}

export function validatePagination(data: unknown): asserts data is IPagination {
  parse(paginationSchema, data);
}
