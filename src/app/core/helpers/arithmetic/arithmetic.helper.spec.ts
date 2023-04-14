import {ArithmeticHelper} from "@core/helpers";

describe('ArithmeticHelper', () => {
  describe('getRandomNumberInRange', () => {
    it('should return a number within the specified range', () => {
      const min = 1;
      const max = 10;
      const result = ArithmeticHelper.getRandomNumberInRange(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    });

    it('should return an integer', () => {
      const min = 1;
      const max = 10;
      const result = ArithmeticHelper.getRandomNumberInRange(min, max);
      expect(Number.isInteger(result)).toBe(true);
    });
  });
});
