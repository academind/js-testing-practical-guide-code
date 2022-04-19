import { vi } from 'vitest';

export const promises = {
  writeFile: vi.fn((path, data) => {
    return new Promise((resolve, reject) => {
      resolve();
    });
  })
}