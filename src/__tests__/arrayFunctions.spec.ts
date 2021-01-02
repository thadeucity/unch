import {
  cloneArray,
  first,
  last,
  push,
  unshift,
  sort,
  reverse,
  insert,
  spliceInsert,
  spliceExtract,
  immutablePop,
  immutableShift,
} from '../arrayFunctions';

describe('Test Array Functions', () => {
  describe('> cloneArray', () => {
    it('should be able to clone an array', () => {
      const originalArray = ['a', 'b', 'c', 'd'];
      const clonedArray = cloneArray(originalArray);

      expect(clonedArray).toStrictEqual(originalArray);
    });

    it('should be able to unlink the cloned array from the original one', () => {
      const originalArray = ['a', 'b', 'c', 'd'];
      const clonedArray = cloneArray(originalArray);

      originalArray[0] = 'testChange';

      expect(clonedArray).not.toStrictEqual(originalArray);
    });

    it('should be able to deeply clone an array', () => {
      const originalArray: any[] = ['a', [1, 2, 3]];
      const clonedArray = cloneArray(originalArray);

      originalArray[1][0] = 'testChange';

      expect(clonedArray).not.toStrictEqual(originalArray);
    });
  });

  describe('> first', () => {
    it('should be able to get the first item of an array', () => {
      const originalArray = ['a', 'b', 'c', 'd'];
      const firstItem = first(originalArray);

      expect(firstItem).toBe('a');
    });
  });

  describe('> last', () => {
    it('should be able to get the last item of an array', () => {
      const originalArray = ['a', 'b', 'c', 'd'];
      const lastItem = last(originalArray);

      expect(lastItem).toBe('d');
    });
  });

  describe('> push', () => {
    it('should be able to push a new item to the end of an array', () => {
      const originalArray = ['a', 'b', 'c', 'd'];
      const updatedArray = push(originalArray, 'Pushed Item');

      expect(updatedArray).toStrictEqual(['a', 'b', 'c', 'd', 'Pushed Item']);
    });

    it('should be able to push items from different types', () => {
      const originalArray = ['a', 'b', 'c', 'd'];
      const updatedArray = push(originalArray, 99);

      expect(updatedArray).toStrictEqual(['a', 'b', 'c', 'd', 99]);
    });

    it('should not be able to change the original array', () => {
      const originalArray = ['a', 'b', 'c', 'd'];
      push(originalArray, 'Pushed Item');

      expect(originalArray).toStrictEqual(['a', 'b', 'c', 'd']);
    });

    it('should be able to deeply clone an array', () => {
      const originalArray: any[] = ['a', [1, 2, 3]];
      const updatedArray = push(originalArray, 99);

      originalArray[1][0] = 'testChange';

      expect(updatedArray[1][0]).not.toBe('testChange');
    });
  });

  describe('> unshift', () => {
    it('should be able to push a new item to the start of an array', () => {
      const originalArray = ['a', 'b', 'c', 'd'];
      const updatedArray = unshift(originalArray, 'Pushed Item');

      expect(updatedArray).toStrictEqual(['Pushed Item', 'a', 'b', 'c', 'd']);
    });

    it('should be able to push items from different types', () => {
      const originalArray = ['a', 'b', 'c', 'd'];
      const updatedArray = unshift(originalArray, 99);

      expect(updatedArray).toStrictEqual([99, 'a', 'b', 'c', 'd']);
    });

    it('should not be able to change the original array', () => {
      const originalArray = ['a', 'b', 'c', 'd'];
      unshift(originalArray, 'Pushed Item');

      expect(originalArray).toStrictEqual(['a', 'b', 'c', 'd']);
    });

    it('should be able to deeply clone an array', () => {
      const originalArray: any[] = ['a', [1, 2, 3]];
      const updatedArray = unshift(originalArray, 99);

      originalArray[1][0] = 'testChange';

      expect(updatedArray[2][0]).not.toBe('testChange');
    });
  });

  describe('> sort', () => {
    it('should be able to sort an array', () => {
      const originalArray = ['d', 'x', 'a', 'c'];
      const sortedArray = sort(originalArray);

      expect(sortedArray).toStrictEqual(['a', 'c', 'd', 'x']);
    });

    it('should be able to sort an array with a custom sorting function', () => {
      const originalArray = [3, 15, 7, 30, 22, 4];
      const sortedArray = sort(originalArray, (a, b) => a - b);

      expect(sortedArray).toStrictEqual([3, 4, 7, 15, 22, 30]);
    });

    it('should not be able to change the original array', () => {
      const originalArray = ['d', 'x', 'a', 'c'];
      sort(originalArray);

      expect(originalArray).toStrictEqual(['d', 'x', 'a', 'c']);
    });

    it('should be able to deeply clone an array', () => {
      const originalArray = [
        { name: 'Jhon Doe', age: 30 },
        { name: 'Mike', age: 44 },
        { name: 'Cora', age: 23 },
        { name: 'Robert', age: 32 },
      ];

      const sortedArray = sort(originalArray, (a, b) => a.age - b.age);

      originalArray[0].name = 'testChange';

      expect(sortedArray.find(el => el.age === 30)).not.toStrictEqual({
        name: 'testChange',
        age: 30,
      });
    });
  });

  describe('> reverse', () => {
    it('should be able to reverse an array', () => {
      const originalArray = [1, 2, 3, 4, 5];
      const reversedArray = reverse(originalArray);

      expect(reversedArray).toStrictEqual([5, 4, 3, 2, 1]);
    });

    it('should not be able to change the original array', () => {
      const originalArray = ['d', 'x', 'a', 'c'];
      reverse(originalArray);

      expect(originalArray).toStrictEqual(['d', 'x', 'a', 'c']);
    });

    it('should be able to deeply clone an array', () => {
      const originalArray: any[] = ['a', [1, 2, 3]];
      const reversedArray = reverse(originalArray);

      originalArray[1][0] = 'testChange';

      expect(reversedArray[0][0]).not.toBe('testChange');
    });
  });

  describe('> insert', () => {
    it('should be able to insert an item to a specific index inside an array', () => {
      const originalArray = [1, 2, 3, 4, 5];
      const updatedArray = insert(originalArray, 2, 99);

      expect(updatedArray).toStrictEqual([1, 2, 99, 3, 4, 5]);
    });

    it('should be able to insert an item from a different type', () => {
      const originalArray = [1, 2, 3, 4, 5];
      const updatedArray = insert(originalArray, 2, 'testInsert');

      expect(updatedArray).toStrictEqual([1, 2, 'testInsert', 3, 4, 5]);
    });

    it('should not be able to change the original array', () => {
      const originalArray = ['d', 'x', 'a', 'c'];
      insert(originalArray, 1, 'testImmutability');

      expect(originalArray).toStrictEqual(['d', 'x', 'a', 'c']);
    });

    it('should be able to deeply clone an array', () => {
      const originalArray: any[] = ['a', [1, 2, 3]];
      const updatedArray = insert(originalArray, 1, 'testInsert');

      originalArray[1][0] = 'testChange';

      expect(updatedArray[2]).not.toStrictEqual(originalArray[1]);
    });
  });

  describe('> spliceInsert', () => {
    it('should be able to splice and insert an item to an array', () => {
      const originalArray = [1, 2, 3, 4, 5];
      const updatedArray = spliceInsert(originalArray, 2, 1, 99);

      expect(updatedArray).toStrictEqual([1, 2, 99, 4, 5]);
    });

    it('should be able to insert an item from a different type', () => {
      const originalArray = [1, 2, 3, 4, 5];
      const updatedArray = spliceInsert(originalArray, 2, 1, 'testInsert');

      expect(updatedArray).toStrictEqual([1, 2, 'testInsert', 4, 5]);
    });

    it('should be able to not remove any item', () => {
      const originalArray = [1, 2, 3, 4, 5];
      const updatedArray = spliceInsert(originalArray, 2, 0, 'testInsert');

      expect(updatedArray).toStrictEqual([1, 2, 'testInsert', 3, 4, 5]);
    });

    it('should be able to not insert any item', () => {
      const originalArray = [1, 2, 3, 4, 5];
      const updatedArray = spliceInsert(originalArray, 2, 1);

      expect(updatedArray).toStrictEqual([1, 2, 4, 5]);
    });

    it('should be able to not enter the number of items to delete', () => {
      const originalArray = [1, 2, 3, 4, 5];
      const updatedArray = spliceInsert(originalArray, 2);

      expect(updatedArray).toStrictEqual([1, 2]);
    });

    it('should not be able to change the original array', () => {
      const originalArray = ['d', 'x', 'a', 'c'];
      spliceInsert(originalArray, 2, 1, 'testImmutability');

      expect(originalArray).toStrictEqual(['d', 'x', 'a', 'c']);
    });

    it('should be able to deeply clone an array', () => {
      const originalArray: any[] = ['a', [1, 2, 3], 'b', 'c'];
      const updatedArray = spliceInsert(
        originalArray,
        2,
        1,
        'testImmutability',
      );

      originalArray[1][0] = 'testChange';

      expect(updatedArray[1]).not.toStrictEqual(originalArray[1]);
    });
  });

  describe('> spliceExtract', () => {
    it('should be able to extract part of an array', () => {
      const originalArray = [1, 2, 3, 4, 5];
      const extractedArray = spliceExtract(originalArray, 2, 2);

      expect(extractedArray).toStrictEqual([3, 4]);
    });

    it('should not be able to change the original array', () => {
      const originalArray = ['d', 'x', 'a', 'c'];
      spliceExtract(originalArray, 1, 2);

      expect(originalArray).toStrictEqual(['d', 'x', 'a', 'c']);
    });

    it('should be able to deeply clone an array', () => {
      const originalArray: any[] = ['a', [1, 2, 3], 'b', 'c'];
      const extractedArray = spliceExtract(originalArray, 1, 2);

      originalArray[1][0] = 'testChange';

      expect(extractedArray[0]).not.toStrictEqual(originalArray[1]);
    });
  });

  describe('> immutablePop', () => {
    it('should be able to pop an array', () => {
      const originalArray = [1, 2, 3, 4, 5];
      const popResults = immutablePop(originalArray);

      expect(popResults).toStrictEqual([5, [1, 2, 3, 4]]);
    });

    it('should not be able to change the original array', () => {
      const originalArray = ['d', 'x', 'a', 'c'];
      immutablePop(originalArray);

      expect(originalArray).toStrictEqual(['d', 'x', 'a', 'c']);
    });

    it('should be able to deeply clone an array', () => {
      const originalArray: any[] = [
        'a',
        [1, 2, 3],
        { name: 'John Doe', age: 30 },
      ];
      const [lastElement, resultArray] = immutablePop(originalArray);

      originalArray[1][0] = 'testChange';
      originalArray[2].name = 'testChange';

      expect(lastElement).toStrictEqual({ name: 'John Doe', age: 30 });
      expect(resultArray[2]).toStrictEqual([1, 2, 3]);
    });
  });

  describe('> immutableShift', () => {
    it('should be able to pop an array', () => {
      const originalArray = [1, 2, 3, 4, 5];
      const popResults = immutableShift(originalArray);

      expect(popResults).toStrictEqual([1, [2, 3, 4, 5]]);
    });

    it('should not be able to change the original array', () => {
      const originalArray = ['d', 'x', 'a', 'c'];
      immutableShift(originalArray);

      expect(originalArray).toStrictEqual(['d', 'x', 'a', 'c']);
    });

    it('should be able to deeply clone an array', () => {
      const originalArray: any[] = [
        { name: 'John Doe', age: 30 },
        'a',
        [1, 2, 3],
      ];
      const [firstElement, resultArray] = immutablePop(originalArray);

      originalArray[2][0] = 'testChange';
      originalArray[0].name = 'testChange';

      expect(firstElement).toStrictEqual({ name: 'John Doe', age: 30 });
      expect(resultArray[2]).toStrictEqual([1, 2, 3]);
    });
  });
});
