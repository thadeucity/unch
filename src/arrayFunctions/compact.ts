import { cloneArray } from './cloneArray';

/** @desc Remove all top level falsey values from input Array */
export const compact = <T>(arr: T[]): T[] => {
  const unlinkedArray = cloneArray(arr);
  return unlinkedArray.filter(el => el);
};
