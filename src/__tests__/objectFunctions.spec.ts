import { cloneObject } from '../objectFunctions/cloneObject';
import { assignObj } from '../objectFunctions/assignObj';
import { deleteObjKeys } from '../objectFunctions/deleteObjKeys';
import { filterObjKeys } from '../objectFunctions/filterObjKeys';
import { updateObj } from '../objectFunctions/updateObj';

describe('Test Object Functions', () => {
  describe('> cloneObject', () => {
    it('should be able to clone an Object', () => {
      const originalObject = {
        name: 'John Doe',
        age: 29,
        nationality: 'Brazilian',
      };
      const clonedObject = cloneObject(originalObject);

      expect(clonedObject).toStrictEqual(originalObject);
    });

    it('should be able to unlink the cloned object from the original one', () => {
      const originalObject = {
        name: 'John Doe',
        age: 29,
        nationality: 'Brazilian',
      };
      const clonedObject = cloneObject(originalObject);

      originalObject.name = 'Immutability Test';

      expect(clonedObject.name).not.toBe(originalObject.name);
    });

    it('should be able to deeply clone an object', () => {
      const originalObject = {
        name: 'John Doe',
        age: 29,
        nationality: 'Brazilian',
        vehicles: [
          {
            type: 'car',
            color: 'red',
          },
          {
            type: 'motorcycle',
            color: 'blue',
          },
        ],
      };
      const clonedObject = cloneObject(originalObject);

      originalObject.vehicles[0].color = 'purple';

      expect(clonedObject.vehicles[0].color).not.toBe(
        originalObject.vehicles[0].color,
      );
    });
  });

  describe('> updateObj', () => {
    it('should be able to update an Object', () => {
      const originalObject = {
        name: 'John Doe',
        age: 29,
        nationality: 'Brazilian',
      };
      const updatedObject = updateObj(originalObject, { name: 'Update Test' });

      expect(updatedObject.name).toBe('Update Test');
    });

    it('should not be able to change the original Object', () => {
      const originalObject = {
        name: 'John Doe',
        age: 29,
        nationality: 'Brazilian',
      };
      updateObj(originalObject, { name: 'Update Test' });

      expect(originalObject.name).toBe('John Doe');
    });

    it('should be able to deeply clone an object', () => {
      const originalObject = {
        name: 'John Doe',
        age: 29,
        nationality: 'Brazilian',
        vehicles: [
          {
            type: 'car',
            color: 'red',
          },
          {
            type: 'motorcycle',
            color: 'blue',
          },
        ],
      };

      const clonedObject = updateObj(originalObject, { name: 'Immutable' });

      originalObject.vehicles[0].color = 'purple';

      expect(clonedObject.vehicles[0].color).not.toBe(
        originalObject.vehicles[0].color,
      );
    });
  });

  describe('> assignObj', () => {
    it('should be able to assign new keys to an Object', () => {
      const originalObject = {
        name: 'John Doe',
        age: 29,
        nationality: 'Brazilian',
      };
      const updatedObject = assignObj(originalObject, { job: 'Developer' });

      expect(updatedObject).toStrictEqual({
        name: 'John Doe',
        age: 29,
        nationality: 'Brazilian',
        job: 'Developer',
      });
    });

    it('should not be able to change the original object', () => {
      const originalObject = {
        name: 'John Doe',
        age: 29,
        nationality: 'Brazilian',
      };
      assignObj(originalObject, { job: 'Developer' });

      expect(originalObject).toStrictEqual({
        name: 'John Doe',
        age: 29,
        nationality: 'Brazilian',
      });
    });

    it('should be able to deeply clone the object', () => {
      const originalObject = {
        name: 'John Doe',
        age: 29,
        nationality: 'Brazilian',
        vehicles: [
          {
            type: 'car',
            color: 'red',
          },
          {
            type: 'motorcycle',
            color: 'blue',
          },
        ],
      };

      const clonedObject = assignObj(originalObject, { test: 'Immutable' });

      originalObject.vehicles[0].color = 'purple';

      expect(clonedObject.vehicles[0].color).not.toBe(
        originalObject.vehicles[0].color,
      );
    });
  });

  describe('> deleteObjKeys', () => {
    it('should be able to delete fields from Object', () => {
      const originalObject = {
        name: 'John Doe',
        age: 29,
        nationality: 'Brazilian',
        job: 'Developer',
      };
      const updatedObject = deleteObjKeys(originalObject, [
        'age',
        'nationality',
      ]);

      expect(updatedObject).toStrictEqual({
        name: 'John Doe',
        job: 'Developer',
      });
    });

    it('should not be able to change the original object', () => {
      const originalObject = {
        name: 'John Doe',
        age: 29,
        nationality: 'Brazilian',
        job: 'Developer',
      };
      deleteObjKeys(originalObject, ['age', 'nationality']);

      expect(originalObject).toStrictEqual({
        name: 'John Doe',
        age: 29,
        nationality: 'Brazilian',
        job: 'Developer',
      });
    });

    it('should be able to deeply clone the object', () => {
      const originalObject = {
        name: 'John Doe',
        age: 29,
        nationality: 'Brazilian',
        vehicles: [
          {
            type: 'car',
            color: 'red',
          },
          {
            type: 'motorcycle',
            color: 'blue',
          },
        ],
      };

      const clonedObject = deleteObjKeys(originalObject, ['name', 'age']);

      originalObject.vehicles[0].color = 'purple';

      expect(clonedObject.vehicles[0].color).not.toBe(
        originalObject.vehicles[0].color,
      );
    });
  });

  describe('> filterObjKeys', () => {
    it('should be able to filter fields from Object', () => {
      const originalObject = {
        name: 'John Doe',
        age: 29,
        nationality: 'Brazilian',
        job: 'Developer',
      };
      const updatedObject = filterObjKeys(originalObject, ['name', 'job']);

      expect(updatedObject).toStrictEqual({
        name: 'John Doe',
        job: 'Developer',
      });
    });

    it('should not be able to change the original object', () => {
      const originalObject = {
        name: 'John Doe',
        age: 29,
        nationality: 'Brazilian',
        job: 'Developer',
      };
      filterObjKeys(originalObject, ['age', 'nationality']);

      expect(originalObject).toStrictEqual({
        name: 'John Doe',
        age: 29,
        nationality: 'Brazilian',
        job: 'Developer',
      });
    });

    it('should be able to deeply clone the object', () => {
      const originalObject = {
        name: 'John Doe',
        age: 29,
        nationality: 'Brazilian',
        vehicles: [
          {
            type: 'car',
            color: 'red',
          },
          {
            type: 'motorcycle',
            color: 'blue',
          },
        ],
      };

      const clonedObject = filterObjKeys(originalObject, ['name', 'vehicles']);

      originalObject.vehicles[0].color = 'purple';

      expect(clonedObject.vehicles[0].color).not.toBe(
        originalObject.vehicles[0].color,
      );
    });
  });
});
