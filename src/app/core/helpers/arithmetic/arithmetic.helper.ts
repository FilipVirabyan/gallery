export class ArithmeticHelper {
  /**
   * Generates a random number within the specified range.
   *
   * @param min The minimum value of the range.
   * @param max The maximum value of the range.
   *
   * @return A random number within the specified range.
   */
  public static getRandomNumberInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
