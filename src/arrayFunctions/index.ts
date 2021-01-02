import rfdc from 'rfdc';
const clone = rfdc();

/**
 * cloneArray
 *
 * @desc Clone input Array
 *
 * @param {Array} arr - Input Array
 * @return {Array}  Cloned Array
 * @example
 *   const originalArray =  ['one', 'two', 'three'];
 *   const clonedArray = cloneArray(originalArray);
 *   clonedArray[0] = ['change'];
 *   // Expect: originalArray == ['one', 'two', 'three']
 *   // Expect: clonedArray == ['change', 'two', 'three']
 */
export const cloneArray = <T>(arr: T[]): T[] => {
  return clone(arr);
};

/**
 * spliceInsert
 *
 * @desc Changes the contents of an array by removing or replacing existing
 * elements and/or adding new elements in place, same as native splice but
 * it returns the updated Array
 *
 * @param {Array} arr - Initial Array
 * @param {number} start - Index where update starts
 * @param {?number} deleteCount - Number of fields to delete
 * @param {...*} items - Items to Insert
 * @return {Array}  Updated Array
 * @example
 *   const weekdays = ['Sun', 'Mon', 'Wed', 'Thu'];
 *   const updatedWeekdays = spliceInsert(weekdays, 2, 0, 'Tue');
 *   // Expect: weekdays == ['Sun', 'Mon', 'Wed', 'Thu']
 *   // Expect: updatedWeekdays == ['Sun', 'Mon', 'Tue', 'Wed', 'Thu']
 */
export const spliceInsert = <T, U>(
  arr: T[],
  start: number,
  deleteCount?: number,
  ...items: U[]
): (T | U)[] => {
  const unlinkedArr = clone(arr);
  return [
    ...unlinkedArr.slice(0, start),
    ...items,
    ...unlinkedArr.slice(
      start + (deleteCount || 0),
      deleteCount !== undefined ? unlinkedArr.length : start,
    ),
  ];
};

/**
 * spliceExtract
 *
 * @desc Extract elements from an Array
 *
 * @param {Array} arr - Initial Array
 * @param {number} start - Index where extraction starts
 * @param {?number} extractCount - Number of fields to extract
 * @return {Array}  Extracted Array
 * @example
 *   const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
 *   const extractedWeekdays = spliceExtract(weekdays, 2, 2);
 *   // Expect: weekdays == ['Sun', 'Mon', 'Tue', 'Wed', 'Thu']
 *   // Expect: extractedWeekdays == ['Tue', 'Wed']
 */
export const spliceExtract = <T>(
  arr: T[],
  start: number,
  extractCount: number,
): T[] => {
  return clone(arr).splice(start, extractCount);
};

/**
 * insert
 *
 * @desc Insert item into the specific index of an array
 *
 * @param {Array} arr - Initial Array
 * @param {number} index - Index to place new element
 * @param {*} item - New Element
 * @return {Array}  Updated Array
 * @example
 *   const weekdays = ['Sun', 'Tue'];
 *   const updatedWeekdays = insert(weekdays, 1, 'Mon');
 *   // Expect: weekdays == ['Sun', 'Tue']
 *   // Expect: updatedWeekdays == ['Sun', 'Mon', 'Tue']
 */
export const insert = <T, U>(arr: T[], index: number, item: U): (T | U)[] => {
  const unlinkedArr = clone(arr);
  return [...unlinkedArr.slice(0, index), item, ...unlinkedArr.slice(index)];
};

/**
 * last
 *
 * @desc Get last item from array
 *
 * @param {Array} arr - Initial Array
 * @return {*}  Last item from array
 * @example
 *   const lastDay = last(['Fri', 'Sat', 'Sun']);
 *   // Expect: lastDay == 'Sun'
 */
export const last = <T>(arr: T[]): T => {
  return arr[arr.length - 1];
};

/**
 * first
 *
 * @desc Get first item from array
 *
 * @param {Array} arr - Initial Array
 * @return {*}  First item from array
 * @example
 *   const firstDay = first(['Fri', 'Sat', 'Sun']);
 *   // Expect: firstDay == 'Fri'
 */
export const first = <T>(arr: T[]): T => {
  return arr[0];
};

/**
 * push
 *
 * @desc Push a new item to the end of an array
 *
 * @param {Array} arr - Initial Array
 * @param {*} item - Item to push
 * @return {Array}  Array with the new Item
 * @example
 *   const originalArray =  ['This', 'lib', 'is'];
 *   const updatedArray = push(originalArray, 'awesome');
 *   // Expect: originalArray == ['This', 'lib', 'is']
 *   // Expect: updatedArray == ['This', 'lib', 'is', 'awesome']
 */
export const push = <T, U>(arr: T[], item: U): (T | U)[] => {
  const unlinkedArr = clone(arr);
  return [...unlinkedArr, item];
};

/**
 * unshift
 *
 * @desc Push a new item to the start of an array
 *
 * @param {Array} arr - Initial Array
 * @param {*} item - Item to push
 * @return {Array}  Array with the new Item
 * @example
 *   const originalArray =  ['one', 'two', 'three'];
 *   const updatedArray = unshift(originalArray, 'zero');
 *   // Expect: originalArray == ['one', 'two', 'three']
 *   // Expect: updatedArray == ['zero', 'one', 'two', 'three']
 */
export const unshift = <T, U>(arr: T[], item: U): (T | U)[] => {
  return [item, ...clone(arr)];
};

/**
 * imutPop
 *
 * @desc Extract last item from array
 *
 * @param {Array} arr - Input Array
 * @return {Array}  [Last Array Item, Array without last element]
 * @example
 *   const originalArray =  ['one', 'two', 'three'];
 *   const popResults = imutPop(originalArray);
 *   // Expect: originalArray == ['one', 'two', 'three']
 *   // Expect: popResults == ['three', ['one', 'two']]
 */
export const imutPop = <T>(arr: T[]): [T, T[]] => {
  const unlinkedArr = clone(arr);
  return [
    unlinkedArr[unlinkedArr.length - 1],
    unlinkedArr.slice(0, unlinkedArr.length - 1),
  ];
};

/**
 * imutShift
 *
 * @desc Extract first item from array
 *
 * @param {Array} arr - Input Array
 * @return {Array}  [First Array Item, Array without first element]
 * @example
 *   const originalArray =  ['one', 'two', 'three'];
 *   const shiftResults = imutShift(originalArray);
 *   // Expect: originalArray == ['one', 'two', 'three']
 *   // Expect: shiftResults == ['one', ['two', 'three']]
 */
export const imutShift = <T>(arr: T[]): [T, T[]] => {
  const unlinkedArr = clone(arr);
  return [unlinkedArr[0], unlinkedArr.slice(1)];
};

/**
 * sort
 *
 * @desc Sort Input Array
 *
 * @param {Array} arr - Input Array
 * @return {Array}  Sorted Array
 * @example
 *   const originalArray =  [3, 15, 7, 30, 22, 4];
 *   const sortedArray = sort(originalArray, (a, b) => a - b);
 *   // Expect: originalArray == [3, 15, 7, 30, 22, 4]
 *   // Expect: sortedArray == [3, 4, 7, 15, 22, 30]
 */
export const sort = <T>(arr: T[], compareFn?: (a: T, b: T) => number): T[] => {
  const unlinkedArr = clone(arr);
  return unlinkedArr.slice().sort(compareFn);
};

/**
 * reverse
 *
 * @desc Reverse order of input Array
 *
 * @param {Array} arr - Input Array
 * @return {Array}  Reversed Array
 * @example
 *   const originalArray =  ['one', 'two', 'three'];
 *   const reversedArray = reverse(originalArray);
 *   // Expect: originalArray == ['one', 'two', 'three']
 *   // Expect: reversedArray == ['three', 'two', 'one']
 */
export const reverse = <T>(arr: T[]): T[] => {
  const workArr = clone(arr);
  for (
    let left = 0, right = workArr.length - 1;
    left < right;
    left += 1, right -= 1
  ) {
    const temporary = workArr[left];
    workArr[left] = workArr[right];
    workArr[right] = temporary;
  }
  return workArr;
};

/**
 * intersection
 *
 * @desc Return intersection between arrays
 *
 * @param {Array} arr1 - First Array
 * @param {Array} arr2 - Second Array
 * @return {Array}  Intersection Between Arrays
 * @example
 *   const originalArr1 = ['one', 'two', 'three'];
 *   const originalArr2 = ['two', 'three', 'four', 'five'];
 *   const intersectionArray = intersection(originalArr1, originalArr2);
 *   // Expect: intersectionArray == ['two', 'three']
 *   // Expect: originalArr1 == ['one', 'two', 'three']
 *   // Expect: originalArr2 == ['two', 'three', 'four', 'five']
 */
export const intersection = <T, U>(arr1: T[], arr2: (T | U)[]): T[] => {
  const unlinkedArr = clone(arr1);
  return unlinkedArr.filter((el) => arr2.includes(el));
};

/**
 * difference
 *
 * @desc Return difference between arrays
 *
 * @param {Array} arr1 - First Array
 * @param {Array} arr2 - Second Array
 * @return {Array}  Difference Between Arrays
 * @example
 *   const originalArr1 = ['one', 'two', 'three'];
 *   const originalArr2 = ['two', 'three', 'four', 'five'];
 *   const differenceArray = difference(originalArr1, originalArr2);
 *   // Expect: differenceArray == ['one']
 *   // Expect: originalArr1 == ['one', 'two', 'three']
 *   // Expect: originalArr2 == ['two', 'three', 'four', 'five']
 */
export const difference = <T, U>(arr1: T[], arr2: (T | U)[]): T[] => {
  const unlinkedArr = clone(arr1);
  return unlinkedArr.filter((el) => !arr2.includes(el));
};

/**
 * symmetricDifference
 *
 * @desc Return symetric difference between arrays
 *
 * @param {Array} arr1 - First Array
 * @param {Array} arr2 - Second Array
 * @return {Array}  Symmetric Difference Between Arrays
 * @example
 *   const originalArr1 = ['one', 'two', 'three'];
 *   const originalArr2 = ['two', 'three', 'four', 'five'];
 *   const differenceArray = symmetricDifference(originalArr1, originalArr2);
 *   // Expect: differenceArray == ['one', 'four', 'five']
 *   // Expect: originalArr1 == ['one', 'two', 'three']
 *   // Expect: originalArr2 == ['two', 'three', 'four', 'five']
 */
export const symmetricDifference = <T>(arr1: T[], arr2: T[]): T[] => {
  const unlinkedArr1 = clone(arr1);
  const unlinkedArr2 = clone(arr2);
  return unlinkedArr1
    .filter((x) => !unlinkedArr2.includes(x))
    .concat(unlinkedArr2.filter((x) => !unlinkedArr1.includes(x)));
};
