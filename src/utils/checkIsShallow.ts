const checkIsShallow = <T>(arr: T[]): boolean => {
  return arr.every(
    el =>
      typeof el === 'undefined' ||
      typeof el === 'boolean' ||
      typeof el === 'number' ||
      typeof el === 'string',
  );
};

export default checkIsShallow;
