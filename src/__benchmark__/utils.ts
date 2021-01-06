const getRandomIntInclusive = (min: number, max: number): number => {
  return Math.floor(
    Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min),
  );
};

const makeString = (length: number): string => {
  const charSet =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .,!@#$%¨&*';
  return Array.from('_'.repeat(length)).reduce(acc => {
    const updatedStr =
      acc + charSet.charAt(Math.floor(Math.random() * charSet.length));
    return updatedStr;
  });
};

export const generateRandomArray = (length: number): (number | string)[] => {
  return Array.from({ length }, (_, i) => {
    if (i % 2) {
      return makeString(getRandomIntInclusive(5, 20));
    }
    return getRandomIntInclusive(0, 999999);
  });
};

export const generateRandomNumericArray = (length: number): number[] => {
  return Array.from({ length }, () => {
    return getRandomIntInclusive(0, 999999);
  });
};

export const generateRandomObjectArray = (
  length: number,
): Record<string, unknown>[] => {
  return Array.from({ length }, () => {
    return {
      [makeString(8)]: getRandomIntInclusive(5, 20),
      [makeString(10)]: getRandomIntInclusive(5, 200),
      [makeString(12)]: getRandomIntInclusive(5, 550),
      [makeString(12)]: makeString(250),
      [makeString(7)]: makeString(1000),
      [makeString(7)]: Array.from({ length: 10 }, () => {
        return getRandomIntInclusive(0, 999999);
      }),
      [makeString(12)]: {
        [makeString(8)]: getRandomIntInclusive(5, 20),
        [makeString(12)]: makeString(250),
      },
    };
  });
};

export const generateRandomUserArray = (
  length: number,
): {
  id: number;
  name: string;
  favouriteNumber: number;
  info: {
    address: string;
    budget: number;
  };
}[] => {
  return Array.from({ length }, () => {
    return {
      id: getRandomIntInclusive(1, 1500),
      name: makeString(30),
      favouriteNumber: getRandomIntInclusive(0, 99),
      info: {
        address: makeString(100),
        budget: getRandomIntInclusive(1, 999999),
      },
    };
  });
};

interface randomObjectType extends Record<string, unknown> {
  fieldToUpdate: number;
  field2: number;
  anotherField: number;
  benchmark: number;
  deepNested: Record<string, unknown>;
}

export const generateRandomObject = (): randomObjectType => {
  return {
    fieldToUpdate: getRandomIntInclusive(5, 20),
    field2: getRandomIntInclusive(5, 200),
    anotherField: getRandomIntInclusive(5, 550),
    benchmark: getRandomIntInclusive(5, 550),
    [makeString(12)]: makeString(250),
    [makeString(7)]: makeString(1000),
    [makeString(7)]: Array.from({ length: 10 }, () => {
      return getRandomIntInclusive(0, 999999);
    }),
    [makeString(12)]: {
      [makeString(8)]: getRandomIntInclusive(5, 20),
      [makeString(12)]: makeString(250),
    },
    [makeString(8)]: generateRandomArray(20),
    [makeString(8)]: generateRandomObjectArray(5),
    [makeString(12)]: makeString(250),
    deepNested: {
      [makeString(8)]: getRandomIntInclusive(5, 20),
      [makeString(12)]: {
        [makeString(10)]: getRandomIntInclusive(5, 200),
        [makeString(12)]: getRandomIntInclusive(5, 550),
        [makeString(12)]: getRandomIntInclusive(5, 550),
        [makeString(12)]: {
          [makeString(7)]: makeString(1000),
          [makeString(7)]: makeString(800),
          [makeString(7)]: {
            [makeString(8)]: getRandomIntInclusive(5, 20),
            [makeString(12)]: makeString(250),
            [makeString(8)]: getRandomIntInclusive(5, 20),
            [makeString(12)]: {
              [makeString(12)]: makeString(250),
            },
          },
        },
      },
    },
  };
};
