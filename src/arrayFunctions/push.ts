import { cloneItem } from '../utils/cloneItem';
import { cloneArray } from './cloneArray';

/** @desc Push a new item to the end of an array */
export const push = <T, U>(arr: T[], item: U): (T | U)[] => {
  const unlinkedArray = cloneArray<T | U>(arr);
  unlinkedArray.push(cloneItem(item));
  return unlinkedArray;
};
