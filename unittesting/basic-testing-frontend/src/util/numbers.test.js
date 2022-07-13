import { describe, it, expect } from "vitest";

import {transformToNumber, cleanNumbers} from './numbers';

describe('transformToNumber()', () => {
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
});

describe('cleanNumbers()', () => {
  it('should return an array of number values if an array of string number values is provided', () => {
    const numberValues = ['1', '2'];

    const cleanedNumbers = cleanNumbers(numberValues);

    expect(cleanedNumbers[0]).toBeTypeOf('number');
  });

  it('should throw an error if an array with at least one empty string is provided', () => {
    const numberValues = ['', 1];

    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow();
  });

})
