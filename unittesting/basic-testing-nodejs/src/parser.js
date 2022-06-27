function extractResultQueryParam(req) {
  let result = req.query.result;

  if (!result) {
    result = 'no-calc';
  }

  return result;
}

function extractNumbers(req) {
  const num1Input = req.body.num1;
  const num2Input = req.body.num2;

  return [num1Input, num2Input];
}

exports.extractNumbers = extractNumbers;
exports.extractResultQueryParam = extractResultQueryParam;
