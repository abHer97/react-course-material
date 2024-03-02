import { isString } from '../shared/domain/validations/string';

export const ENV_VARS = {
  baseUrl: isString(import.meta.env.VITE_BASE_URL) ? import.meta.env.VITE_BASE_URL : '',
};
