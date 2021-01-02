import { Subtract } from "../utils/helperTypes";
import rfdc from "rfdc";

const clone = rfdc();

/**
 * cloneObject
 *
 * @desc Clone input Object
 *
 * @param {Object} obj - Input Object
 * @return {Object}  Cloned Object
 * @example
 *   const originalObject = {
 *     name: 'Victor',
 *     vehicles: [
 *       {
 *         type: "car",
 *         color: "red",
 *       },
 *       {
 *         type: "boat",
 *         color: "blue",
 *       }
 *     ]
 *   };
 *   const clonedObject = cloneObject(originalObject);
 *   clonedObject.vehicle[0].color = 'purple';
 *
 *      Expect: originalObject == {
 *        name: 'Victor',
 *        vehicles: [
 *          {
 *            type: "car",
 *            color: "red",
 *          },
 *          {
 *            type: "boat",
 *            color: "blue",
 *          }
 *        ]
 *      }
 *
 *      Expect: clonedObject == {
 *        name: 'Victor',
 *        vehicles: [
 *          {
 *            type: "car",
 *            color: "purple",
 *          },
 *          {
 *            type: "boat",
 *            color: "blue",
 *          }
 *        ]
 *      }
 */
export const cloneObject = <T>(arr: T[]): T[] => {
  return clone(arr);
};

/**
 * updateObj
 *
 * @desc Update input Object
 *
 * @param {Object} obj - Input Object
 * @param {Object} fieldsToUpdate - Update Fields Object
 * @return {Object}  Updated Object
 * @example
 *   const originalObject = {
 *     name: 'Victor',
 *     age: 29
 *   };
 *   const updatedObject = updateObj(originalObject, {name: 'John Doe'});
 *
 *   // Expect: originalObject == {name: "Victor", age: 29}
 *   // Expect: updatedObject == {name: "John Doe", age: 29}
 */
export const updateObj = <T>(obj: T, fieldsToUpdate: Partial<T>): T => {
  return { ...clone(obj), ...clone(fieldsToUpdate) };
};

/**
 * assignObj
 *
 * @desc Assign elements to input Object
 *
 * @param {Object} obj - Input Object
 * @param {Object} fieldsToAssign - Update Fields Object
 * @return {Object}  Updated Object
 * @example
 *   const originalObject = {
 *     name: 'John Doe',
 *     age: 30
 *   };
 *   const updatedObject = assignObj(originalObject, {isDeveloper: true});
 *
 *   // Expect: originalObject == {name: "John Doe", age: 30}
 *   // Expect: updatedObject == {name: "John Doe", age: 30, isDeveloper: true}
 */
export const assignObj = <T, S extends {}>(
  obj: T,
  fieldsToAssign: S
): T & S => {
  return { ...clone(obj), ...clone(fieldsToAssign) };
};

/**
 * deleteObjKeys
 *
 * @desc Assign elements to input Object
 *
 * @param {Object} obj - Input Object
 * @param {Object} fieldsToAssign - Update Fields Object
 * @return {Object}  Updated Object
 * @example
 *   const originalObject = {
 *     name: 'John Doe',
 *     isDeveloper: true,
 *     age: 30,
 *     favouriteFood: 'sushi'
 *   };
 *   const updatedObject = deleteObjKeys(originalObject, ["age", "isDeveloper"]);
 *
 *   Expect: originalObject == {
 *     name: "John Doe",
 *     isDeveloper: true,
 *     age: 30,
 *     favouriteFood: "sushi"
 *   }
 *
 *   Expect: updatedObject == {name: "John Doe", favouriteFood: 'sushi'}
 */
export const deleteObjKeys = <T, U extends keyof T>(
  obj: T,
  removeKeys: Array<U>
): Subtract<T, Record<U, any>> => {
  return Object.entries(clone(obj)).reduce((acc, current) => {
    const [key, value] = current as [U, any];
    if (removeKeys.indexOf(key) < 0) {
      acc[key] = value;
    }
    return acc;
  }, {} as Partial<T>) as Subtract<T, Record<U, any>>;
};

/**
 * filterObjKeys
 *
 * @desc Assign elements to input Object
 *
 * @param {Object} obj - Input Object
 * @param {Object} fieldsToAssign - Update Fields Object
 * @return {Object}  Object with only the filtered Keys
 * @example
 *   const originalObject = {
 *     name: 'John Doe',
 *     isDeveloper: true,
 *     age: 30,
 *     favouriteFood: 'sushi'
 *   };
 *   const updatedObject = filterObjKeys(originalObject, ["age", "isDeveloper"]);
 *
 *   Expect: originalObject == {
 *     name: "John Doe",
 *     isDeveloper: true,
 *     age: 30,
 *     favouriteFood: "sushi"
 *   }
 *
 *   Expect: updatedObject == {age: 30, isDeveloper: true}
 */
export const filterObjKeys = <T, U extends keyof T>(
  obj: T,
  filterKeys: Array<U>
): Pick<T, U> => {
  return Object.entries(clone(obj)).reduce((acc, current) => {
    const [key, value] = current as [U, any];
    if (filterKeys.indexOf(key) >= 0) {
      acc[key] = value;
    }
    return acc;
  }, {} as Partial<T>) as Pick<T, U>;
};
