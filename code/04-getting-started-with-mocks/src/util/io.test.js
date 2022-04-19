import { it, expect, vi } from 'vitest';
import { promises as fs } from 'fs';

import writeData from './io';

vi.mock('fs');

it('should execute the writeFile method', () => {
  const testData = 'Test';
  const testFilename = 'test.txt';

  writeData(testData, testFilename)

  // return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
  expect(fs.writeFile).toBeCalled();
});
