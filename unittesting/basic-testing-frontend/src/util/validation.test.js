import { it, expect } from "vitest";

import { validateStringNotEmpty } from "./validation";
import { validateNumber } from "./validation";

it('should throw an error if an empty string provided', () => {
  const input = '';
  const expectedResult = () => {validateStringNotEmpty(input)};

  expect(expectedResult).toThrow;
});

it('should throw an error if the number passed is not a number', () => {
  const input = "ab";
  const expectedResult = () => {validateNumber(input)};

  expect(expectedResult).toThrow;
});

it('should not throw an error if the string length is greater than 0', () => {
  const input = "hi";
  const expectedResult = () => {validateStringNotEmpty(input)};

  expect(expectedResult).not.toThrow;
})

it('should not throw an error if the number passed is a number', () => {
  const input = 2;
  const expectedResult = () => {validateNumber(input)};

  expect(expectedResult).not.toThrow;
});

if('should throw an error if a non-numeric value is provided', () => {
  const input = "1";
  const expectedResult = () => {validateNumber(input)};

  expect(expectedResult).toThrow;
});
