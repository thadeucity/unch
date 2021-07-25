/* eslint-disable */
import Benchmark from 'benchmark';
import R from 'ramda';
import * as _ from 'lodash';

import {
  generateRandomArray,
  generateRandomNumericArray,
  generateRandomObject,
  generateRandomObjectArray,
  generateRandomUserArray,
} from './utils';

import { cloneArray } from '../arrayFunctions/cloneArray';
import { compact } from '../arrayFunctions/compact';
import { getFirst } from '../arrayFunctions/getFirst';
import { getLast } from '../arrayFunctions/getLast';
import { insert } from '../arrayFunctions/insert';
import { push } from '../arrayFunctions/push';
import { reverse } from '../arrayFunctions/reverse';
import { sort } from '../arrayFunctions/sort';
import { unshift } from '../arrayFunctions/unshift';
import { shift } from '../arrayFunctions/shift';
import { pop } from '../arrayFunctions/pop';

import { cloneObject } from '../objectFunctions/cloneObject';
import { assignObj } from '../objectFunctions/assignObj';
import { updateObj } from '../objectFunctions/updateObj';

const runCloneBenchmarks = () => {
  const cloneShortArrayBenchmark = new Benchmark.Suite();
  const cloneLongArrayBenchmark = new Benchmark.Suite();
  const cloneComplexArrayBenchmark = new Benchmark.Suite();

  console.log('\n\n-------------------------------------------------------');
  console.log('CLONE ARRAY BANCHMARKS');

  console.log('\n Start DeepClone for short arrays');
  const randomShortArray = generateRandomArray(40);
  cloneShortArrayBenchmark
    .add('Unch', () => {
      cloneArray(randomShortArray);
    })
    .add('Ramda', () => {
      R.clone(randomShortArray);
    })
    .add('Lodash', () => {
      _.cloneDeep(randomShortArray);
    })
    .on('cycle', (event: any) => {
      console.log(String(event.target));
    })
    .run({ async: false });

  console.log('\n Start DeepClone for long arrays');
  const randomLongArray = generateRandomArray(10000);
  cloneLongArrayBenchmark
    .add('Unch_Long', () => {
      cloneArray(randomLongArray);
    })
    .add('Ramda_Long', () => {
      R.clone(randomLongArray);
    })
    .add('Lodash_Long', () => {
      _.cloneDeep(randomLongArray);
    })
    .on('cycle', (event: any) => {
      console.log(String(event.target));
    })
    .run({ async: false });

  console.log('\n Start DeepClone for long and complex array');
  const randomComplexArray = generateRandomObjectArray(10000);
  cloneComplexArrayBenchmark
    .add('Unch_Complex', () => {
      cloneArray(randomComplexArray);
    })
    .add('Ramda_Complex', () => {
      R.clone(randomComplexArray);
    })
    .add('Lodash_Complex', () => {
      _.cloneDeep(randomComplexArray);
    })
    .on('cycle', (event: any) => {
      console.log(String(event.target));
    })
    .run({ async: false });
};

const runGetFirstBenchmark = () => {
  console.log('\n\n-------------------------------------------------------');
  console.log('ARRAY GET FIRST ITEM BANCHMARKS');

  const getFirstBenchmark = new Benchmark.Suite();

  console.log('\n Start Get First');
  const randomArray = generateRandomArray(500);
  getFirstBenchmark
    .add('Unch', () => {
      getFirst(randomArray);
    })
    .add('Ramda', () => {
      R.clone(randomArray[0]);
    })
    .add('Lodash', () => {
      _.cloneDeep(_.first(randomArray));
    })
    .on('cycle', (event: any) => {
      console.log(String(event.target));
    })
    .run({ async: false });
};

const runGetLastBenchmark = () => {
  console.log('\n\n-------------------------------------------------------');
  console.log('ARRAY GET LAST ITEM BANCHMARKS');

  const getLastBenchmark = new Benchmark.Suite();

  console.log('\n Start Get Last');
  const randomArray = generateRandomArray(500);
  getLastBenchmark
    .add('Unch', () => {
      getLast(randomArray);
    })
    .add('Ramda', () => {
      R.clone(randomArray[randomArray.length - 1]);
    })
    .add('Lodash', () => {
      _.cloneDeep(_.last(randomArray));
    })
    .on('cycle', (event: any) => {
      console.log(String(event.target));
    })
    .run({ async: false });
};

const runCompactBenchmarks = () => {
  console.log('\n\n-------------------------------------------------------');
  console.log('ARRAY COMPACT ITEM BANCHMARKS');

  console.log('\n Start Simple Compact');
  const simpleCompactBenchmarks = new Benchmark.Suite();
  const randomArray = generateRandomArray(500);
  simpleCompactBenchmarks
    .add('Unch', () => compact(randomArray))
    .add('Ramda', () => R.filter(Boolean, randomArray))
    .add('Lodash', () => _.compact(_.clone(randomArray)))
    .on('cycle', (event: any) => {
      console.log(String(event.target));
    })
    .run({ async: false });

  console.log('\n Start Complex Compact');
  const complexCompactBenchmarks = new Benchmark.Suite();
  const randomComplexArray = generateRandomObjectArray(500);
  complexCompactBenchmarks
    .add('Unch', () => compact(randomComplexArray))
    .add('Ramda', () => R.filter(Boolean, R.clone(randomComplexArray)))
    .add('Lodash', () => _.compact(_.cloneDeep(randomComplexArray)))
    .on('cycle', (event: any) => {
      console.log(String(event.target));
    })
    .run({ async: false });
};

const runPushBenchmarks = () => {
  console.log('\n\n-------------------------------------------------------');
  console.log('ARRAY PUSH ITEM BANCHMARKS');

  console.log('\n Start Simple Push');
  const simplePushBenchmarks = new Benchmark.Suite();
  const randomArray = generateRandomArray(500);
  simplePushBenchmarks
    .add('Unch', () => push(randomArray, 'Pushed Element'))
    .add('Ramda', () =>
      R.insert(randomArray.length, 'Pushed Element', randomArray),
    )
    .add('Lodash', () => _.clone([...randomArray, 'Pushed Element']))
    .on('cycle', (event: any) => {
      console.log(String(event.target));
    })
    .run({ async: false });

  console.log('\n Start Complex Push');
  const complexPushBenchmarks = new Benchmark.Suite();
  const randomComplexArray = generateRandomObjectArray(500);
  const itemToPush = randomComplexArray[0];
  complexPushBenchmarks
    .add('Unch', () => push(randomComplexArray, itemToPush))
    .add('Ramda', () =>
      R.clone(
        R.insert(
          randomComplexArray.length,
          itemToPush,
          randomComplexArray as any,
        ),
      ),
    )
    .add('Lodash', () => _.cloneDeep([...randomComplexArray, itemToPush]))
    .on('cycle', (event: any) => {
      console.log(String(event.target));
    })
    .run({ async: false });
};

const runInsertBenchmarks = () => {
  console.log('\n\n-------------------------------------------------------');
  console.log('ARRAY INSERT ITEM BANCHMARKS');
  const simpleInsertBenchmarks = new Benchmark.Suite();

  console.log('\n Start Simple Insert');
  const randomArray = generateRandomArray(500);
  simpleInsertBenchmarks
    .add('Unch', () => insert(randomArray, {
      index: 5,
      item: 'Pushed Element'
    }))
    .add('Ramda', () => R.insert(5, 'Pushed Element', randomArray))
    .add('Lodash', () => {
      _.clone([
        ...randomArray.slice(0, 5),
        'Pushed Element',
        ...randomArray.slice(5),
      ]);
    })
    .on('cycle', (event: any) => {
      console.log(String(event.target));
    })
    .run({ async: false });

  const complexInsertBenchmarks = new Benchmark.Suite();

  console.log('\nStart Complex Insert');
  const randomComplexArray = generateRandomObjectArray(500);
  const itemToPush = randomComplexArray[0];
  complexInsertBenchmarks
    .add('Unch', () => insert(randomComplexArray, {
      index: 5,
      item: itemToPush
    }))
    .add('Ramda', () =>
      R.insert(5, R.clone(itemToPush), R.clone(randomComplexArray) as any),
    )
    .add('ES6 + Lodash', () =>
      _.cloneDeep([
        ...randomComplexArray.slice(0, 5),
        itemToPush,
        ...randomComplexArray.slice(5),
      ]),
    )
    .on('cycle', (event: any) => {
      console.log(String(event.target));
    })
    .run({ async: false });
};

const runUnshiftBenchmarks = () => {
  console.log('\n\n-------------------------------------------------------');
  console.log('ARRAY UNSHIFT ITEM BANCHMARKS');
  const simpleUnshiftBenchmarks = new Benchmark.Suite();

  console.log('\n Start Simple Unshift');
  const randomArray = generateRandomArray(500);
  simpleUnshiftBenchmarks
    .add('Unch', () => unshift(randomArray, 'Pushed Element'))
    .add('Ramda', () => R.insert(0, 'Pushed Element', randomArray))
    .add('Lodash', () => _.clone(['Pushed Element', ...randomArray]))
    .on('cycle', (event: any) => {
      console.log(String(event.target));
    })
    .run({ async: false });

  const complexUnshiftBenchmarks = new Benchmark.Suite();

  console.log('\n Start Complex Unshift');
  const randomComplexArray = generateRandomObjectArray(500);
  const itemToPush = randomComplexArray[0];
  complexUnshiftBenchmarks
    .add('Unch', () => unshift(randomComplexArray, itemToPush))
    .add('Ramda', () =>
      R.clone(R.insert(0, itemToPush, randomComplexArray as any)),
    )
    .add('ES6 + Lodash', () => _.cloneDeep([itemToPush, ...randomComplexArray]))
    .on('cycle', (event: any) => {
      console.log(String(event.target));
    })
    .run({ async: false });
};

const runReverseBenchmarks = () => {
  console.log('\n\n-------------------------------------------------------');
  console.log('REVERSE ARRAY BANCHMARKS');
  console.log('\n Start Simple Array Reverse');

  const simpleArrayReverseBenchmarks = new Benchmark.Suite();
  const randomArray = generateRandomArray(500);
  simpleArrayReverseBenchmarks
    .add('Unch', () => reverse(randomArray))
    .add('Ramda', () => R.reverse(randomArray))
    .add('Lodash', () => _.reverse(_.clone(randomArray)))
    .on('cycle', (event: any) => console.log(String(event.target)))
    .run({ async: false });

  console.log('\n Start Complex Array Reverse');
  const complexArrayReverseBenchmarks = new Benchmark.Suite();
  const randomComplexArray = generateRandomObjectArray(500);
  complexArrayReverseBenchmarks
    .add('Unch', () => reverse(randomComplexArray))
    .add('Ramda', () => R.reverse(R.clone(randomComplexArray)))
    .add('Lodash', () => _.reverse(_.cloneDeep(randomComplexArray)))
    .on('cycle', (event: any) => console.log(String(event.target)))
    .run({ async: false });
};

const runSortingBenchmarks = () => {
  console.log('\n\n-------------------------------------------------------');
  console.log('SORT ARRAY BANCHMARKS');
  console.log('\n Start Simple Sorting');

  const simpleArrayReverseBenchmarks = new Benchmark.Suite();
  const randomNumericArray = generateRandomNumericArray(1000);
  const sortingFunction = (a: any, b: any) => a - b;
  simpleArrayReverseBenchmarks
    .add('Unch', () => sort(randomNumericArray, sortingFunction))
    .add('Ramda', () => R.sort(sortingFunction, randomNumericArray))
    .add('Lodash', () => _.sortBy(_.clone(randomNumericArray), sortingFunction))
    .on('cycle', (event: any) => console.log(String(event.target)))
    .run({ async: false });

  console.log('\n Start Objects Array Sorting');
  const complexArrayReverseBenchmarks = new Benchmark.Suite();
  const randomObjectArray = generateRandomUserArray(500);
  const objectSortingFunction = (
    a: typeof randomObjectArray[0],
    b: typeof randomObjectArray[0],
  ) => a.info.budget - b.info.budget;
  complexArrayReverseBenchmarks
    .add('Unch', () => sort(randomObjectArray, objectSortingFunction))
    .add('Ramda', () =>
      R.sort(objectSortingFunction, R.clone(randomObjectArray)),
    )
    .add('Lodash', () => {
      const unsortedArray = _.cloneDeep(randomObjectArray);
      return _.sortBy(unsortedArray, objectSortingFunction);
    })
    .on('cycle', (event: any) => console.log(String(event.target)))
    .run({ async: false });
};

const runPopBenchmarks = () => {
  console.log('\n\n-------------------------------------------------------');
  console.log('ARRAY POP BANCHMARKS');
  console.log('\n Start Simple Array Pop');

  const simpleArrayPopBenchmarks = new Benchmark.Suite();
  const randomArray = generateRandomArray(500);
  simpleArrayPopBenchmarks
    .add('Unch', () => pop(randomArray))
    .add('Ramda', () => {
      return [
        R.remove(randomArray.length - 1, 1, randomArray),
        R.clone(randomArray[randomArray.length - 1]),
      ];
    })
    .add('Lodash', () => {
      const clonedArray = _.clone(randomArray);
      return [
        _.remove(clonedArray, randomArray.length - 1),
        clonedArray[randomArray.length - 1],
      ];
    })
    .on('cycle', (event: any) => console.log(String(event.target)))
    .run({ async: false });

  console.log('\n Start Complex Array Pop');

  const complexArrayPopBenchmarks = new Benchmark.Suite();
  const randomObjectArray = generateRandomObjectArray(500);
  complexArrayPopBenchmarks
    .add('Unch', () => pop(randomObjectArray))
    .add('Ramda', () => {
      const clonedRamdaArray = R.clone(randomObjectArray);
      return [
        R.remove(randomObjectArray.length - 1, 1, clonedRamdaArray),
        clonedRamdaArray[randomObjectArray.length - 1],
      ];
    })
    .add('Lodash', () => {
      const clonedArray = _.cloneDeep(randomObjectArray);
      return [
        _.remove(clonedArray, randomObjectArray.length - 1),
        clonedArray[randomObjectArray.length - 1],
      ];
    })
    .on('cycle', (event: any) => console.log(String(event.target)))
    .run({ async: false });
};

const runShiftBenchmarks = () => {
  console.log('\n\n-------------------------------------------------------');
  console.log('ARRAY SHIFT BANCHMARKS');
  console.log('\n Start Simple Array Shift');

  const simpleArrayShiftBenchmarks = new Benchmark.Suite();
  const randomArray = generateRandomArray(500);
  simpleArrayShiftBenchmarks
    .add('Unch', () => shift(randomArray))
    .add('Ramda', () => {
      return [R.clone(randomArray[0]), R.remove(0, 1, randomArray)];
    })
    .add('Lodash', () => {
      const clonedArray = _.clone(randomArray);
      return [clonedArray[0], _.remove(clonedArray, 0)];
    })
    .on('cycle', (event: any) => console.log(String(event.target)))
    .run({ async: false });

  console.log('\n Start Complex Array Shift');

  const complexArrayShiftBenchmarks = new Benchmark.Suite();
  const randomObjectArray = generateRandomObjectArray(500);
  complexArrayShiftBenchmarks
    .add('Unch', () => shift(randomObjectArray))
    .add('Ramda', () => {
      const clonedRamdaArray = R.clone(randomObjectArray);
      return [clonedRamdaArray[0], R.remove(0, 1, clonedRamdaArray)];
    })
    .add('Lodash', () => {
      const clonedArray = _.cloneDeep(randomObjectArray);
      return [clonedArray[0], _.remove(clonedArray, 0)];
    })
    .on('cycle', (event: any) => console.log(String(event.target)))
    .run({ async: false });
};

// Object Functions Benchmarks

const runCloneObjectsBenchmarks = () => {
  console.log('\n\n-------------------------------------------------------');
  console.log('OBJECT CLONE BANCHMARKS');
  console.log('\n Start Object Clone');

  const simpleArrayShiftBenchmarks = new Benchmark.Suite();
  const randomObject = generateRandomObject();
  simpleArrayShiftBenchmarks
    .add('Unch', () => cloneObject(randomObject))
    .add('Ramda', () => R.clone(randomObject))
    .add('Lodash', () => _.cloneDeep(randomObject))
    .on('cycle', (event: any) => console.log(String(event.target)))
    .run({ async: false });
};

const runUpdateObjectsBenchmarks = () => {
  console.log('\n\n-------------------------------------------------------');
  console.log('OBJECT UPDATE BANCHMARKS');
  console.log('\n Start Object Update');

  const anotherFieldLenses = R.lensProp('anotherField');

  const simpleArrayShiftBenchmarks = new Benchmark.Suite();
  const randomObject = generateRandomObject();
  simpleArrayShiftBenchmarks
    .add('Unch', () => updateObj(randomObject, { anotherField: 999 }))
    .add('Ramda', () => R.set(anotherFieldLenses, 999, R.clone(randomObject)))
    .add('Lodash', () =>
      _.update(_.cloneDeep(randomObject), 'anotherField', () => 999),
    )
    .on('cycle', (event: any) => console.log(String(event.target)))
    .run({ async: false });
};

const runAssignObjectBenchmarks = () => {
  console.log('\n\n-------------------------------------------------------');
  console.log('OBJECT ASSIGN BANCHMARKS');
  console.log('\n Start Object Assign');

  const simpleArrayShiftBenchmarks = new Benchmark.Suite();
  const randomObject = generateRandomObject();

  class TestNewFields {
    constructor() {
      (this as any).newField = 1;
      (this as any).anotherNewField = 1;
    }
  }

  simpleArrayShiftBenchmarks
    .add('Unch', () =>
      assignObj(randomObject, { newField: 1, anotherNewField: 'abc' }),
    )
    .add('Lodash', () =>
      _.assign(_.cloneDeep(randomObject), new TestNewFields()),
    )
    .on('cycle', (event: any) => console.log(String(event.target)))
    .run({ async: false });
};

runCloneBenchmarks();
runGetFirstBenchmark();
runGetLastBenchmark();
runPushBenchmarks();
runCompactBenchmarks();
runInsertBenchmarks();
runUnshiftBenchmarks();
runReverseBenchmarks();
runSortingBenchmarks();
runPopBenchmarks();
runShiftBenchmarks();
runCloneObjectsBenchmarks();
runUpdateObjectsBenchmarks();
runAssignObjectBenchmarks();
