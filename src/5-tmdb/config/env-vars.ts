import { isString } from '../shared/domain/validations/string';

export const ENV_VARS = {
  baseUrl: isString(import.meta.env.VITE_BASE_URL) ? import.meta.env.VITE_BASE_URL : '',
  accountId: Number(import.meta.env.VITE_ACCOUNT_ID || 0),
};
