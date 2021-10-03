/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { cloneItem as identityFn } from '../utils/cloneItem';

type NextFn<T, U> = (prevFnResponse: T) => U;
type CurrentFn<T, U> = (args: T) => U;

const pipeFn = <T, U>(fn: CurrentFn<T, U>) => ({
  f: <W>(g: NextFn<U, W>) => pipeFn((arg: T) => g(fn(arg))),
  build: () => (x: T) => fn(identityFn(x)),
});

export const pipe = {
  f: pipeFn,
  build: () => identityFn,
};
