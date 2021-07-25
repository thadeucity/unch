import { cloneArray } from './cloneArray';
import { cloneItem } from '../utils/cloneItem';

/** @desc Push a new item to the start of an array */
export const unshift = <T, U>(arr: T[], item: U): (T | U)[] => {
  const unlinkedArray = cloneArray<T | U>(arr);
  unlinkedArray.unshift(cloneItem(item));
  return unlinkedArray;
};
