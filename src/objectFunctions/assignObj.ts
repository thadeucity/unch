import { cloneObject } from './cloneObject';

/** @desc Assign elements to input Object */
export const assignObj = <T, S extends Record<string, unknown>>(
  obj: T,
  fieldsToAssign: S,
): T & S => {
  return { ...cloneObject(obj), ...cloneObject(fieldsToAssign) };
};
