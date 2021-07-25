import { cloneArray } from './cloneArray';

/** @desc Reverse order of input Array */
export const reverse = <T>(arr: T[]): T[] => {
  const workArray = cloneArray(arr);
  for (
    let left = 0, right = workArray.length - 1;
    left < right;
    left += 1, right -= 1
  ) {
    const temporary = workArray[left];
    workArray[left] = workArray[right];
    workArray[right] = temporary;
  }
  return workArray;
};
