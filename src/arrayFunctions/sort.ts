import { cloneArray } from './cloneArray';

/** @desc Sort Input Array */
export const sort = <T>(arr: T[], compareFn?: (a: T, b: T) => number): T[] => {
  const unlinkedArray = cloneArray(arr);
  return unlinkedArray.sort(compareFn);
};
