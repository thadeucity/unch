import { Subtract } from '../utils/helperTypes';
import { cloneObject } from './cloneObject';

/** @desc Assign elements to input Object */
export const deleteObjKeys = <T, U extends keyof T>(
  obj: T,
  removeKeys: Array<U>,
): Subtract<T, Record<U, any>> => {
  return Object.entries(cloneObject(obj)).reduce((acc, current) => {
    const [key, value] = current as [U, any];
    if (removeKeys.indexOf(key) < 0) {
      acc[key] = value;
    }
    return acc;
  }, {} as Partial<T>) as Subtract<T, Record<U, any>>;
};
