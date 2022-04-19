function validateStringNotEmpty(value) {
  if (value.trim().length === 0) {
    throw new Error('Invalid input - must not be empty.');
  }
}

function validateNumber(number) {
  if (isNaN(number)) {
    throw new Error('Invalid number input.');
  }
}

exports.validateNumber = validateNumber;
exports.validateStringNotEmpty = validateStringNotEmpty;
