import { cloneArray } from './cloneArray';
import { cloneItem } from '../utils/cloneItem';

type InsertPropsType<U> = { index: number; item: U };

type InsertType = <T, U>(arr: T[], props: InsertPropsType<U>) => (T | U)[];

/** @desc Insert item into the specific index of an array */
export const insert: InsertType = <T, U>(
  arr: T[],
  { index, item }: InsertPropsType<U>,
) => {
  const unlinkedArray = cloneArray<T | U>(arr);
  unlinkedArray.splice(index, 0, cloneItem(item));
  return unlinkedArray;
};
