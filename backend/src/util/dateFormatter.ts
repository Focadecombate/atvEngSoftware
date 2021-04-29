import { parse } from 'date-fns';

const toFormat = (date: string): Date => parse(date, 'dd/MM/yyyy', Date.now());

export { toFormat };
