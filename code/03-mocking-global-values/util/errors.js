export class HttpError {
  constructor(statusCode, message, data) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}

export class ValidationError {
  constructor(message) {
    this.message = message;
  }
}