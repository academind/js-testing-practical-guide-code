import { it, expect } from 'vitest';

import { add } from './math';

it('should summarize all number values in an array', () => {
  // Arrange
  const numbers = [1, 2];

  // Act
  const result = add(numbers);

  // Assert
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );
  expect(result).toBe(expectedResult);
});
