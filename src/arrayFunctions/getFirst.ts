import { cloneItem } from '../utils/cloneItem';

/** @desc Get first item from array */
export const getFirst = <T>(arr: T[]): T => {
  const firstValue = arr[0];
  return cloneItem(firstValue);
};
