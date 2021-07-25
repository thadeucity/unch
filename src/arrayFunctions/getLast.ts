import { cloneItem } from '../utils/cloneItem';

/** @desc Get last item from array */
export const getLast = <T>(arr: T[]): T => {
  const lastValue = arr[arr.length - 1];
  return cloneItem(lastValue);
};
