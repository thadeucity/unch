<div align="center">

# unch

Collection of fast and lightweight utilities for functional programing.

[![Dependency Status](https://img.shields.io/david/thadeucity/unch.svg)](https://github.com/thadeucity/unch)

  <a href="https://victoralvarenga.com">
    <img alt="Made by Victor Alvarenga" src="https://img.shields.io/badge/made%20by-Victor Alvarenga-%23134F84">
  </a>

  <a href="LICENSE" >
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23134F84">
  </a>

<hr/>

### **What's new?**

:tada: Pipe and Compose Functions

<hr/><br/>

</div>

## Features

- Providing a set of [functions](#table-of-contents) for functional programing with full imutability.

## Goals

- Quality - Thoroughly tested for reliable results
- Minimal - Only depends on single third-party dependency
- Simple - Minimal learning curve required
- Fast - Optimized for speed
- Compatibily - The code is compiled for both ES2017 and ES5

## Installation

```bash
# NPM
npm install unch

# YARN
yarn add unch
```

## How to use

```ts
// import all
import * as Unch from 'unch';

const originalArray = [1, 2, ['a', 'b', 'c']];

const clonedArray = Unch.cloneArray(originalArray);
// clonedArray == [1, 2, ['a', 'b', 'c']]
```

```ts
// import using tree shaking
import { cloneArray } from 'unch';

const originalArray = [1, 2, ['a', 'b', 'c']];

const clonedArray = cloneArray(originalArray);
// clonedArray == [1, 2, ['a', 'b', 'c']]
```

## Contributing

I am open for contributions. If you're planning to contribute please make sure to read the contributing guide as it will make things much more organized: [CONTRIBUTING.md](/CONTRIBUTING.md)

---

# Table of Contents

## Array Functions

- [`cloneArray`](#cloneArray)
- [`getFirst`](#getFirst)
- [`getLast`](#getLast)
- [`push`](#push)
- [`unshift`](#unshift)
- [`pop`](#pop)
- [`shift`](#shift)
- [`sort`](#sort)
- [`reverse`](#reverse)
- [`compact`](#compact)
- [`splice`](#splice)
- [`insert`](#insert)

---

## Object Functions

- [`cloneObject`](#cloneObject)
- [`assignObj`](#assignObj)
- [`updateObj`](#updateObj)
- [`filterObjKeys`](#filterObjKeys)
- [`deleteObjKeys`](#deleteObjKeys)

## General Functions

- [`pipe`](#pipe)
- [`compose`](#compose)

---

---

## Array Functions

### `cloneArray`

Deep clone the input array.

**Params:**
```ts
   arr: Array<T> // Initial Array

return: Array<T> // Cloned Array
```

**Use:**
```ts
import { cloneArray } from 'unch';

const originalArray = [1, 2, ['a', 'b', 'c']];
const clonedArray = cloneArray(originalArray);
// clonedArray == [1, 2, ['a', 'b', 'c']]
```

**Benchmarks:**
```ts
// Short Arrays (length: 40, strings and numbers)
Unch:   8,374,545 ops/sec ±1.26%
Lodash:   276,857 ops/sec ±0.26%
Ramda:     94,323 ops/sec ±1.51%

// Long Arrays (length: 10k, strings and numbers)
Unch:   40,533 ops/sec ±0.24%
Lodash:  1,294 ops/sec ±1.75%
Ramda:     420 ops/sec ±0.26%

// Complex Arrays (length: 10k, strings, numbers, arrays and objects)
Unch:   13.50 ops/sec ±4.96%
Lodash:  5.83 ops/sec ±1.00%
Ramda:   0.80 ops/sec ±0.56%
```

[⇧ back to top](#table-of-contents)

---

### `getFirst`

Return the first element of an array.

**Params:**
```ts
   arr: Array<T> // Initial Array

return: <T>      // First Element from Array
```

**Use:**
```ts
import { getFirst } from 'unch';

const originalArray = ['a', 'b', 'c'];
const firstElement = first(originalArray);
// firstElement == 'a'
```

**Benchmarks:**
```ts
// Arrays (length: 500, strings and numbers)
Unch:   193,645,584 ops/sec ±0.39%
Lodash:  15,619,036 ops/sec ±0.30%
Ramda:    2,683,393 ops/sec ±0.93%
```

[⇧ back to top](#table-of-contents)

---

### `getLast`

Return the last element of an array.

**Params:**
```ts
   arr: Array<T> // Initial Array

return: <T>      // Last Element from Array
```

**Use:**
```ts
import { getLast } from 'unch';

const originalArray = ['a', 'b', 'c'];
const lastElement = last(originalArray);
// lastElement == 'c'
```

**Benchmarks:**
```ts
// Arrays (length: 500, strings and numbers)
Unch:   176,999,379 ops/sec ±0.19%
Lodash:  15,602,697 ops/sec ±0.29%
Ramda:    2,619,757 ops/sec ±0.82%
```

[⇧ back to top](#table-of-contents)

---

### `push`

Push a new item to the end of an array.

**Params:**
```ts
   arr: Array<T>     // Initial Array
  item: <U>          // Item to insert

return: Array<T | U> // Updated Array
```

**Use:**
```ts
import { push } from 'unch';

const originalArray = ['a', 'b', 'c'];
const updatedArray = push(originalArray, 'd');
// updatedArray == ['a', 'b', 'c', 'd']
```

**Benchmarks:**
```ts
// Simple Arrays (length: 500, strings and numbers)
Unch:   417,260 ops/sec ±0.33%
Lodash: 219,018 ops/sec ±0.63%
Ramda:  769,436 ops/sec ±2.10%

// Complex Arrays (length: 500, strings, numbers, arrays and objects)
Unch:   2,234 ops/sec ±2.08%
Lodash:   261 ops/sec ±0.81%
Ramda:    202 ops/sec ±0.50%
```

[⇧ back to top](#table-of-contents)

---

### `unshift`

Push a new item to the start of an array.

**Params:**
```ts
   arr: Array<T>     // Initial Array
  item: <U>          // Item to insert

return: Array<T | U> // Updated Array
```

**Use:**
```ts
import { unshift } from 'unch';

const originalArray = ['a', 'b', 'c'];
const updatedArray = unshift(originalArray, 99);
// updatedArray == [99,'a', 'b', 'c']
```

**Benchmarks:**
```ts
// Simple Arrays (length: 500, strings and numbers)
Unch:   489,191 ops/sec ±0.25%
Lodash: 188,554 ops/sec ±0.31%
Ramda:  717,867 ops/sec ±2.02%

// Complex Arrays (length: 500, strings, numbers, arrays and objects)
Unch:   2,215 ops/sec ±0.26%
Lodash:   264 ops/sec ±0.37%
Ramda:    200 ops/sec ±1.12%
```

[⇧ back to top](#table-of-contents)

---

### `pop`

Extract the last item from the array and returns a **Tuple** with the first element being the item and the second being the remaining array.

**Params:**
```ts
   arr: Array<T>   // Initial Array

return: [
  [0]: <T>,        // Last Item of Array
  [1]: Array<T>    // Remaining Array
]
```

**Use:**
```ts
import { immutablePop } from 'unch';

const originalArray = ['a', 'b', 'c', 'd', 'e'];

const [lastItem, remainingArray] = immutablePop(originalArray);
// lastItem == ['e']
// remainingArray == ['a', 'b', 'c', 'd']
```

**Benchmarks:**
```ts
(no equivalents)
```

[⇧ back to top](#table-of-contents)

---

### `shift`

Extract the first item from the array and returns a **Tuple** with the first element being the item and the second being the remaining array.

**Params:**
```ts
   arr: Array<T>   // Initial Array

return: [
  [0]: <T>,        // First Item of Array
  [1]: Array<T>    // Remaining Array
]
```

**Use:**
```ts
import { shift } from 'unch';

const originalArray = ['a', 'b', 'c', 'd', 'e'];

const [firstItem, remainingArray] = shift(originalArray);
// firstItem == ['a']
// remainingArray == ['b', 'c', 'd', 'e']
```

**Benchmarks:**
```ts
(no equivalents)
```

[⇧ back to top](#table-of-contents)

---

### `sort`

Sorts the elements of an array. Works the same way as the **[Vanilla JS Sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)** but doesn't change the original array.

**Params:**
```ts
       arr: Array<T>                    // Initial Array
compareFn?: (a: any, b: any) => number  // Compare function (optional)

    return: Array<T>                    // Sorted Array
```

**Use:**
```ts
import { sort } from 'unch';

const originalArray = ['c', 'j', 'a', 'i', 'f'];
const sortedArray = sort(originalArray);
// sortedArray == ['a', 'c', 'f', 'i', 'j']

const numericArray = [45, 3, 17, 118, 42, 1000];
const sortedNumericArray = sort(numericArray, (a, b) => a - b);
// sortedNumericArray = [3, 17, 42, 45, 118, 1000]
```

**Benchmarks:**
```ts
// Simple Arrays (length: 500, strings and numbers)
Unch:    7,012 ops/sec ±0.51%
Lodash: 15,414 ops/sec ±0.38%
Ramda:   7,247 ops/sec ±0.22%

// Complex Arrays (length: 500, strings, numbers, arrays and objects)
Unch:  4,568 ops/sec ±2.54%
Ramda:   586 ops/sec ±0.23%
```

[⇧ back to top](#table-of-contents)

---

### `reverse`

Reverse the input array.

**Params:**
```ts
   arr: Array<T> // Initial Array

return: Array<T> // Reversed Array
```

**Use:**
```ts
import { reverse } from 'unch';

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverse(originalArray);
// reversedArray == [5, 4, 3, 2, 1]
```

**Benchmarks:**
```ts
// Simple Arrays (length: 500, strings and numbers)
Unch:   540,601 ops/sec ±0.61%
Lodash:  28,195 ops/sec ±0.29%
Ramda:   30,548 ops/sec ±0.29%

// Complex Arrays (length: 500, strings, numbers, arrays and objects)
Unch:   1,222 ops/sec ±19.34%
Lodash:   259 ops/sec ±00.41%
Ramda:    214 ops/sec ±00.20%
```

[⇧ back to top](#table-of-contents)

---

### `compact`

Remove all top level falsey values of input Array.

**Params:**
```ts
   arr: Array<T> // Initial Array

return: Array<T> // Compacted Array
```

**Use:**
```ts
import { compact } from 'unch';

const originalArray = [0, 1, null, 'example', '', 3, undefined, 3, 4];
const reversedArray = reverse(originalArray);
// reversedArray == [1, 'example', 3, 3, 4]
```

**Benchmarks:**
```ts
// Simple Arrays (length: 500, strings and numbers)
Unch:   226,116 ops/sec ±0.69%
Lodash: 173,346 ops/sec ±0.49%
Ramda:  297,270 ops/sec ±1.69%

// Complex Arrays (length: 500, strings, numbers, arrays and objects)
Unch:   2,319 ops/sec ±1.68%
Lodash:   262 ops/sec ±0.40%
Ramda:    170 ops/sec ±0.28%
```

[⇧ back to top](#table-of-contents)

---

### `splice`

Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place, same as **[Vanilla JS Splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)** but it returns a  **Tuple** with the first element being the updated array and the second being the extracted array.

**Params:**
```ts
  arr: Array<T>          // Initial Array
  props: {
    start: number        // Index where update starts
    deleteCoumt?: number // Number of fields to delete (optional)
    items?: Array<U>     // Items to insert (optional)
  }

return: [
  [0]: Array<T | U>,     // Updated Array
  [1]: Array<T>[]        // Extracted Array
]
```

**Use:**
```ts
import { splice } from 'unch';

const originalArray = [1, 2, 3, 4, 5, 6, 7];

const [updatedArray, extractedArray] = splice(originalArray, {
  start: 2,
  deleteCount: 3,
  items: [88, 99]
});
// updatedArray == [1, 2, 88, 99, 6, 7]
// extractedArray == [3, 4, 5]
```

**Benchmarks:**
```ts
(no equivalents)
```

[⇧ back to top](#table-of-contents)

### `insert`

Insert Item in Array in an especific index;

**Params:**
```ts
  arr: Array<T>      // Initial Array
  props: {
    index: number,   // Index place new Item
    item: <U>        // Item to insert
  }

return: Array<T | U> // Updated Array
```

**Use:**
```ts
import { insert } from 'unch';

const originalArray = [1, 2, 3, 4];

const updatedArray = splice(originalArray, {
  index: 1,
  item: 'New Item'
});
// updatedArray == [1, 'New Item', 2, 3, 4]
```

**Benchmarks:**
```ts
// Simple Arrays (length: 500, strings and numbers)
Unch:   421,675 ops/sec ±0.47%
Lodash: 161,942 ops/sec ±0.56%
Ramda:  718,233 ops/sec ±1.92%

// Complex Arrays (length: 500, strings, numbers, arrays and objects)
Unch:   2,295 ops/sec ±2.49%
Lodash:   259 ops/sec ±0.71%
Ramda:    208 ops/sec ±0.50%
```

[⇧ back to top](#table-of-contents)

---

---

## Object Functions

### `cloneObject`

Deep clone the input Object.

**Params:**
```ts
   obj: <T> // Initial Object

return: <T> // Cloned Object
```

**Use:**
```ts
import { cloneObject } from 'unch';

const originalObject = {
  name: 'John Doe',
  age: 29,
  job: 'Developer',
};
const clonedObject = cloneObject(originalObject);

// Expect:
clonedObject == {
  name: 'John Doe',
  age: 29,
  job: 'Developer',
};
```

**Benchmarks:**
```ts
Unch:   159,130 ops/sec ±0.27%
Lodash:  33,683 ops/sec ±1.11%
Ramda:   21,111 ops/sec ±0.96%
```

[⇧ back to top](#table-of-contents)

---

### `assignObj`

Assign new fields to an Object.

**Params:**
```ts
           obj:  <T> // Initial Object
fieldsToAssign:  <U> // New Fields

        return:  <T> // Updated Object
```

**Use:**
```ts
import { assignObj } from 'unch';

const originalObject = {
  name: 'John Doe',
  age: 29,
  job: 'Developer',
};

const updatedObject = assignObj(originalObject, {
  isAwesome: true,
  favouriteFood: 'sushi',
});

// Expect:
updatedObject == {
  name: 'John Doe',
  age: 29,
  job: 'Developer',
  isAwesome: true,
  favouriteFood: 'sushi',
};
```

**Benchmarks:**
```ts

Unch:   148,622 ops/sec ±0.26%
Lodash:  33,692 ops/sec ±0.39%
```

[⇧ back to top](#table-of-contents)

---

### `updateObj`

Assign new fields to an Object.

**Params:**
```ts
           obj: <T> // Initial Object
fieldsToUpdate: <U> // Fields to Update

        return: <T> // Updated Object
```

**Use:**
```ts
import { updateObj } from 'unch';

const originalObject = {
  name: 'John Doe',
  age: 29,
  job: 'Developer',
};

const updatedObject = updateObj(originalObject, {
  age: 85,
  job: 'Samurai',
});

// Expect:
updatedObject ==
  {
    name: 'John Doe',
    age: 85,
    job: 'Samurai',
  };
```

**Benchmarks:**
```ts
Unch:   150,946 ops/sec ±0.24%
Lodash:  20,931 ops/sec ±0.40%
Ramda:   33,662 ops/sec ±0.45%
```

[⇧ back to top](#table-of-contents)

---

### `filterObjKeys`

Filter keys from an Object.

**Params:**
```ts
       obj: <T>           // Initial Object
filterKeys: Array<string> // Keys to filter

    return: <T>           // Filtered Object
```

**Use:**
```ts
import { updateObj } from 'unch';

const originalObject = {
  name: 'John Doe',
  age: 29,
  job: 'Developer',
  isAwesome: true,
  favouriteFood: 'sushi',
};

const filteredObject = filterObjKeys(originalObject, ['name', 'age']);

// Expect:
filteredObject == {
  name: 'John Doe',
  age: 29,
};
```

**Benchmarks:**
```ts
(no equivalents)
```

[⇧ back to top](#table-of-contents)

---

### `deleteObjKeys`

Remove keys from an Object.

**Params:**
```ts
       obj: <T>           // Initial Object
removeKeys: Array<string> // Keys to remove

    return: <T>           // Updated Object
```

**Use:**
```ts
import { updateObj } from 'unch';

const originalObject = {
  name: 'John Doe',
  age: 29,
  job: 'Developer',
  isAwesome: true,
  favouriteFood: 'sushi',
};

const updatedObject = deleteObjKeys(originalObject, ['name', 'age']);

// Expect:
updatedObject == {
  job: 'Developer',
  isAwesome: true,
  favouriteFood: 'sushi',
};
```

**Benchmarks:**
```ts
//Benchmarks (no equivalents)
```

[⇧ back to top](#table-of-contents)

---
### `pipe`

Create Pipe function.

**Use:**
```ts
import { pipe } from 'unch';

const add = (a: number) => (b: number) => b + a;
const multiplyBy = (a: number) => (b: number) => b * a;
const parseResult = (a: number) => `Result: ${a}`;

const myPipe = pipe
  .f(add(2))
  .f(multiplyBy(4))
  .f(parseResult)
  .build();

const result = myPipe(5);

// Expect:
result == 'Result: 28';
```

[⇧ back to top](#table-of-contents)

---
### `compose`

Create Compose function.

**Use:**
```ts
import { compose } from 'unch';

const add = (a: number) => (b: number) => b + a;
const multiplyBy = (a: number) => (b: number) => b * a;
const parseResult = (a: number) => `Result: ${a}`;

const myCompose = compose
  .f(parseResult)
  .f(multiplyBy(4))
  .f(add(5))
  .build();

const result = myCompose(5);

// Expect:
result == 'Result: 40';
```

[⇧ back to top](#table-of-contents)

## License

[MIT License](/LICENSE)

Copyright (c) 2021 Victor Alvarenga <mailto:git@victoralvarenga.com> (https://victoralvarenga.com)

---

Made with ♥ by Victor Alvarenga :wave: [Get in touch!](https://www.linkedin.com/in/victoralvarenga/)
