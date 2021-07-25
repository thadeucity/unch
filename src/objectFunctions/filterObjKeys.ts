import { cloneObject } from './cloneObject';

/** @desc Assign elements to input Object */
export const filterObjKeys = <T, U extends keyof T>(
  obj: T,
  filterKeys: Array<U>,
): Pick<T, U> => {
  return Object.entries(cloneObject(obj)).reduce((acc, current) => {
    const [key, value] = current as [U, any];
    if (filterKeys.indexOf(key) >= 0) {
      acc[key] = value;
    }
    return acc;
  }, {} as Partial<T>) as Pick<T, U>;
};
