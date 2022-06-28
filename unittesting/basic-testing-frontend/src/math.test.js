import { it, expect } from "vitest";

import { add } from './math';

it('should summarize all number values in an array', () => {
  // Arrange
  const numbers = [1,2];
  const expectedResult = numbers.reduce((prevValue, curValue) => prevValue + curValue, 0);

  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBe(expectedResult);
});
