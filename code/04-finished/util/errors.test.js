import { describe, expect, it } from 'vitest';

import { HttpError, ValidationError } from './errors';

describe('class HttpError', () => {
  it('should contain the provided status code, message and data', () => {
    const testStatus = 1;
    const testMessage = 'Test';
    const testData = { key: 'test' };

    const testError = new HttpError(testStatus, testMessage, testData);

    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toBe(testData);
  });

  it('should contain undefined as data if no data is provided', () => {
    const testStatus = 1;
    const testMessage = 'Test';

    const testError = new HttpError(testStatus, testMessage);

    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toBeUndefined();
  })
});

describe('class ValidationError', () => {
  it('should contain the provided message', () => {
    const testMessage = 'test';

    const testError = new ValidationError(testMessage);
    
    expect(testError.message).toBe(testMessage);
  })
});