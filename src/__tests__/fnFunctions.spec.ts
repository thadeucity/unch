import { pipe } from '../fnFunctions/pipe';
import { compose } from '../fnFunctions/compose';

const add = (a: number) => (b: number) => b + a;
const multiplyBy = (a: number) => (b: number) => b * a;
const subtract = (a: number) => (b: number) => b - a;
const divideBy = (a: number) => (b: number) => b / a;
const parseResult = (a: number) => `Result: ${a}`;

describe('Test Fn Functions', () => {
  describe('> pipe', () => {
    it('should be able to pipe functions', () => {
      const testPipe = pipe
        .f(add(2))
        .f(multiplyBy(3))
        .f(subtract(4))
        .f(divideBy(2))
        .f(parseResult)
        .build();

      expect(testPipe(10)).toBe('Result: 16');
    });

    it('should return an identity Function if no .f is provided', () => {
      const testPipe = pipe.build();

      expect(testPipe(10)).toBe(10);
    });

    it('should unlink props entered into the pipe function', () => {
      const testUnlinkPipe = pipe
        .f((a: number[]) => a.map(add(2)))
        .f((a: number[]) => a.map(multiplyBy(10)))
        .build();

      const originalArr = [1, 2, 3];

      expect(originalArr).toStrictEqual([1, 2, 3]);
      expect(testUnlinkPipe(originalArr)).toStrictEqual([30, 40, 50]);
    });
  });

  describe('> compose', () => {
    it('should be able to compose functions', () => {
      const testCompose = compose
        .f(parseResult)
        .f(divideBy(2))
        .f(subtract(4))
        .f(multiplyBy(3))
        .f(add(2))
        .build();

      expect(testCompose(10)).toBe('Result: 16');
    });

    it('should return an identity Function if no .f is provided', () => {
      const testCompose = compose.build();

      expect(testCompose(10)).toBe(10);
    });

    it('should unlink props entered into the compose function', () => {
      const testUnlinkCompose = compose
        .f((a: number[]) => a.map(multiplyBy(10)))
        .f((a: number[]) => a.map(add(2)))
        .build();

      const originalArr = [1, 2, 3];

      expect(originalArr).toStrictEqual([1, 2, 3]);
      expect(testUnlinkCompose(originalArr)).toStrictEqual([30, 40, 50]);
    });
  });
});
