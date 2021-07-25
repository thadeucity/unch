import { cloneArray } from './cloneArray';

/** @desc Extract last item from array */
export const pop = <T>(arr: T[]): [T, T[]] => {
  const unlinkedArray = cloneArray(arr);
  return [
    unlinkedArray[unlinkedArray.length - 1],
    unlinkedArray.slice(0, unlinkedArray.length - 1),
  ];
};
