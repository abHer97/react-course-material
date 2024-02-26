import { number, object, parse } from 'valibot';

import { IPagination } from '../entities/pagination';

const paginationSchema = object({
  page: number(),
  total_pages: number(),
  total_results: number(),
});

export function isPagination(data: unknown): data is IPagination {
  try {
    parse(paginationSchema, data);

    return true;
  } catch {
    return false;
  }
}
