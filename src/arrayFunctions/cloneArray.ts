import rfdc from 'rfdc';

import { checkIsShallow } from '../utils/checkIsShallow';

const clone = rfdc();

/** @desc Clone input Array */
export const cloneArray = <T>(arr: T[]): T[] => {
  return checkIsShallow(arr) ? arr.slice() : clone(arr);
};
