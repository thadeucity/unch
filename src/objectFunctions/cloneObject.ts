import rfdc from 'rfdc';

const clone = rfdc();

/** @desc Clone input Object */
export const cloneObject = <T>(obj: T): T => {
  return clone(obj);
};
