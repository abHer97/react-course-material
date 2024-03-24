import { format as formatDateFns } from 'date-fns';

interface IDateUtils {
  format(date: Date | number | string, dateFormat: string): string;
}

const format: IDateUtils['format'] = (date, format) => {
  return formatDateFns(date, format);
};

export const dateUtils: IDateUtils = {
  format,
};
