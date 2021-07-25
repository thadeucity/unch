import { cloneArray } from './cloneArray';

/** @desc Extract first item from array */
export const shift = <T>(arr: T[]): [T, T[]] => {
  const unlinkedArray = cloneArray(arr);
  return [unlinkedArray[0], unlinkedArray.slice(1)];
};
