import { it, expect } from "vitest";

import {transformToNumber} from './numbers';

it('should transform a string integer to an integer', () => {
  const input = "2";
  const expectedResult = +input;

  const result = transformToNumber(input);

  expect(result).toBe(expectedResult);
  expect(result).toBeTypeOf('number');
});

it('should yield NaN if input includes characters other than digits', () => {
  const input = "2ab";
  const input2 = {};

  const result = transformToNumber(input);
  const result2 = transformToNumber(input2);

  expect(result).toBeNaN;
  expect(result2).toBeNaN;
});
