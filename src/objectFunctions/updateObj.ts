import { cloneObject } from './cloneObject';

/** @desc Update input Object */
export const updateObj = <T>(obj: T, fieldsToUpdate: Partial<T>): T => {
  return { ...cloneObject(obj), ...cloneObject(fieldsToUpdate) };
};
