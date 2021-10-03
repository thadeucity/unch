/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { cloneItem as identityFn } from '../utils/cloneItem';

type NextFn<T, U> = (nextFnProps: T) => U;
type CurrentFn<T, U> = (args: T) => U;

const composeFn = <T, U>(fn: CurrentFn<T, U>) => ({
  f: <C>(g: NextFn<C, T>) => composeFn((arg: C) => fn(g(arg))),
  build: () => (x: T) => fn(identityFn(x)),
});

export const compose = {
  f: composeFn,
  build: () => identityFn,
};
