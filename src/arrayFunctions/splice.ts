import { cloneArray } from './cloneArray';

type SpliceInsertType = <T, U>(
  arr: T[],
  props: { start: number; deleteCount?: number; items?: U[] },
) => [(T | U)[], T[]];

/**
 * @desc Changes the contents of an array by removing or replacing existing
 * elements and/or adding new elements in place, same as native splice but
 * it returns the updated Array
 */
export const splice: SpliceInsertType = (
  arr,
  { start, deleteCount, items = [] },
) => {
  const unlinkedArray = cloneArray(arr);
  return [
    [
      ...unlinkedArray.slice(0, start),
      ...cloneArray(items),
      ...unlinkedArray.slice(
        start + (deleteCount || 0),
        deleteCount !== undefined ? unlinkedArray.length : start,
      ),
    ],
    deleteCount !== undefined
      ? unlinkedArray.splice(start, deleteCount)
      : unlinkedArray.slice(start),
  ];
};
