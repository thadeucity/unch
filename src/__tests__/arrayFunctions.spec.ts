import { cloneArray } from '../arrayFunctions/cloneArray';
import { compact } from '../arrayFunctions/compact';
import { getFirst } from '../arrayFunctions/getFirst';
import { getLast } from '../arrayFunctions/getLast';
import { insert } from '../arrayFunctions/insert';
import { pop } from '../arrayFunctions/pop';
import { push } from '../arrayFunctions/push';
import { reverse } from '../arrayFunctions/reverse';
import { shift } from '../arrayFunctions/shift';
import { sort } from '../arrayFunctions/sort';
import { splice } from '../arrayFunctions/splice';
import { unshift } from '../arrayFunctions/unshift';

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
      expect(clonedArray[1][0]).toBe(1);
    });
  });

  describe('> first', () => {
    it('should be able to get the first item of an array', () => {
      const originalArray = ['a', 'b', 'c', 'd'];
      const firstItem = getFirst(originalArray);

      expect(firstItem).toBe('a');
    });

    it('should be able to return an unlinked item', () => {
      const originalArray = [[1, 2, 3], 'a', 'b', 'c'];
      const firstItem = getFirst(originalArray);

      (originalArray as any)[0][0] = 99;

      expect(originalArray).toStrictEqual([[99, 2, 3], 'a', 'b', 'c']);
      expect(firstItem).toStrictEqual([1, 2, 3]);
    });
  });

  describe('> last', () => {
    it('should be able to get the last item of an array', () => {
      const originalArray = ['a', 'b', 'c', 'd'];
      const lastItem = getLast(originalArray);

      expect(lastItem).toBe('d');
    });

    it('should be able to return an unlinked item', () => {
      const originalArray = ['a', 'b', 'c', [1, 2, 3]];
      const lastItem = getLast(originalArray);

      (originalArray as any)[3][0] = 99;

      expect(originalArray).toStrictEqual(['a', 'b', 'c', [99, 2, 3]]);
      expect(lastItem).toStrictEqual([1, 2, 3]);
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

    it('should be able to unlink the original pushed item', () => {
      const originalArray = ['a', 'b', 'c'];
      const itemToPush = [1, 2, 3];
      const updatedArray = push(originalArray, itemToPush);

      itemToPush[0] = 99;

      expect(originalArray).toStrictEqual(['a', 'b', 'c']);
      expect(itemToPush).toStrictEqual([99, 2, 3]);
      expect(updatedArray).toStrictEqual(['a', 'b', 'c', [1, 2, 3]]);
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

    it('should be able to unlink the original pushed item', () => {
      const originalArray = ['a', 'b', 'c'];
      const itemToPush = [1, 2, 3];
      const updatedArray = unshift(originalArray, itemToPush);

      itemToPush[0] = 99;

      expect(originalArray).toStrictEqual(['a', 'b', 'c']);
      expect(itemToPush).toStrictEqual([99, 2, 3]);
      expect(updatedArray).toStrictEqual([[1, 2, 3], 'a', 'b', 'c']);
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
      const updatedArray = insert(originalArray, {
        index: 2,
        item: 99,
      });

      expect(updatedArray).toStrictEqual([1, 2, 99, 3, 4, 5]);
    });

    it('should be able to insert an item from a different type', () => {
      const originalArray = [1, 2, 3, 4, 5];
      const updatedArray = insert(originalArray, {
        index: 2,
        item: 'testInsert',
      });

      expect(updatedArray).toStrictEqual([1, 2, 'testInsert', 3, 4, 5]);
    });

    it('should not be able to change the original array', () => {
      const originalArray = ['d', 'x', 'a', 'c'];
      insert(originalArray, {
        index: 1,
        item: 'testImmutability',
      });

      expect(originalArray).toStrictEqual(['d', 'x', 'a', 'c']);
    });

    it('should be able to unlink the new input element', () => {
      const originalArray = ['d', 'x', 'a', 'c'];
      const inputElement = [1, 3, 4, 5];
      const updatedArray = insert(originalArray, {
        index: 0,
        item: inputElement,
      });

      inputElement[0] = 99;

      expect(updatedArray[0]).toStrictEqual([1, 3, 4, 5]);
    });

    it('should be able to deeply clone an array', () => {
      const originalArray: any[] = ['a', [1, 2, 3]];
      const updatedArray = insert(originalArray, {
        index: 1,
        item: 'testInsert',
      });

      originalArray[1][0] = 'testChange';

      expect(updatedArray[2]).not.toStrictEqual(originalArray[1]);
    });
  });

  describe('> compact', () => {
    it('should be able to remove all falsey values from array', () => {
      const originalArray = [0, 1, null, 'test', '', 3, undefined, 3, 4];
      const compactedArray = compact(originalArray);

      expect(compactedArray).toStrictEqual([1, 'test', 3, 3, 4]);
    });

    it('should not be able to change the original array', () => {
      const originalArray = [0, 1, null, 'test', '', 3, undefined, 3, 4];
      compact(originalArray);

      expect(originalArray).toStrictEqual([
        0,
        1,
        null,
        'test',
        '',
        3,
        undefined,
        3,
        4,
      ]);
    });

    it('should be able to deeply clone an array', () => {
      const originalArray: any[] = ['a', [1, 2, 3]];
      const compactedArray = compact(originalArray);

      originalArray[1][0] = 'testChange';

      expect(compactedArray[1][0]).not.toBe('testChange');
    });
  });

  describe('> splice', () => {
    it('should be able to splice and insert an item to an array', () => {
      const originalArray = [1, 2, 3, 4, 5];
      const resultArray = splice(originalArray, {
        start: 2,
        deleteCount: 1,
        items: [99],
      });

      expect(resultArray).toStrictEqual([[1, 2, 99, 4, 5], [3]]);
    });

    it('should be able to insert an item from a different type', () => {
      const originalArray = [1, 2, 3, 4, 5];
      const resultArray = splice(originalArray, {
        start: 2,
        deleteCount: 1,
        items: ['testInsert'],
      });

      expect(resultArray).toStrictEqual([[1, 2, 'testInsert', 4, 5], [3]]);
    });

    it('should be able to not remove any item', () => {
      const originalArray = [1, 2, 3, 4, 5];
      const resultArray = splice(originalArray, {
        start: 2,
        deleteCount: 0,
        items: ['testInsert'],
      });

      expect(resultArray).toStrictEqual([[1, 2, 'testInsert', 3, 4, 5], []]);
    });

    it('should be able to not insert any item', () => {
      const originalArray = [1, 2, 3, 4, 5];
      const resultArray = splice(originalArray, {
        start: 2,
        deleteCount: 1,
      });

      expect(resultArray).toStrictEqual([[1, 2, 4, 5], [3]]);
    });

    it('should be able to omit the number of items to delete', () => {
      const originalArray = [1, 2, 3, 4, 5];
      const resultArray = splice(originalArray, { start: 2 });

      expect(resultArray).toStrictEqual([
        [1, 2],
        [3, 4, 5],
      ]);
    });

    it('should not be able to change the original array', () => {
      const originalArray = ['d', 'x', 'a', 'c'];
      splice(originalArray, {
        start: 2,
        deleteCount: 1,
        items: ['testImmutability'],
      });

      expect(originalArray).toStrictEqual(['d', 'x', 'a', 'c']);
    });

    it('should be able to unlink the original input elements', () => {
      const originalArray = ['d', 'x', 'a', 'c'];
      const firstNewElement = [1, 2, 3];
      const secondNewElement = ['z', 'y', 'x'];

      const resultArray = splice<string, (string | number)[]>(originalArray, {
        start: 0,
        deleteCount: 0,
        items: [firstNewElement, secondNewElement],
      });

      firstNewElement[0] = 99;
      secondNewElement[0] = 'testChange';

      expect(resultArray[0][0]).toStrictEqual([1, 2, 3]);
      expect(resultArray[0][1]).toStrictEqual(['z', 'y', 'x']);
    });

    it('should be able to deeply clone an array', () => {
      const originalArray: any[] = ['a', [1, 2, 3], 'b', 'c'];
      const resultArray = splice(originalArray, {
        start: 2,
        deleteCount: 1,
        items: ['testImmutability'],
      });

      originalArray[1][0] = 'testChange';

      expect(resultArray[0][0][1]).not.toStrictEqual(originalArray[1]);
    });

    it('should be able to extract part of an array', () => {
      const originalArray = [1, 2, 3, 4, 5];
      const resultArray = splice(originalArray, {
        start: 2,
        deleteCount: 2,
      });

      expect(resultArray[1]).toStrictEqual([3, 4]);
    });
  });

  describe('> pop', () => {
    it('should be able to pop an array', () => {
      const originalArray = [1, 2, 3, 4, 5];
      const popResults = pop(originalArray);

      expect(popResults).toStrictEqual([5, [1, 2, 3, 4]]);
    });

    it('should not be able to change the original array', () => {
      const originalArray = ['d', 'x', 'a', 'c'];
      pop(originalArray);

      expect(originalArray).toStrictEqual(['d', 'x', 'a', 'c']);
    });

    it('should be able to deeply clone an array', () => {
      const originalArray: any[] = [
        'a',
        [1, 2, 3],
        { name: 'John Doe', age: 30 },
      ];
      const [lastElement, resultArray] = pop(originalArray);

      originalArray[1][0] = 'testChange';
      originalArray[2].name = 'testChange';

      expect(lastElement).toStrictEqual({ name: 'John Doe', age: 30 });
      expect(resultArray).toStrictEqual(['a', [1, 2, 3]]);
    });
  });

  describe('> shift', () => {
    it('should be able to pop an array', () => {
      const originalArray = [1, 2, 3, 4, 5];
      const popResults = shift(originalArray);

      expect(popResults).toStrictEqual([1, [2, 3, 4, 5]]);
    });

    it('should not be able to change the original array', () => {
      const originalArray = ['d', 'x', 'a', 'c'];
      shift(originalArray);

      expect(originalArray).toStrictEqual(['d', 'x', 'a', 'c']);
    });

    it('should be able to deeply clone an array', () => {
      const originalArray: any[] = [
        { name: 'John Doe', age: 30 },
        'a',
        [1, 2, 3],
      ];
      const [firstElement, resultArray] = shift(originalArray);

      originalArray[2][0] = 'testChange';
      originalArray[0].name = 'testChange';

      expect(firstElement).toStrictEqual({ name: 'John Doe', age: 30 });
      expect(resultArray[1]).toStrictEqual([1, 2, 3]);
    });
  });
});
