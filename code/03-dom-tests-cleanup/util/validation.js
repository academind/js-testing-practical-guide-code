import { ValidationError } from './errors.js';

export function validateNotEmpty(text, errorMessage) {
  if (!text || text.trim().length === 0) {
    throw new ValidationError(errorMessage);
  }
}