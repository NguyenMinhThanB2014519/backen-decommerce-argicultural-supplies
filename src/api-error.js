class ApiError extends Error {
  constructor(message, statusCode, headers = {}) {
    super(message);
    this.statusCode = statusCode;
    this.headers = headers;
  }
}

module.exports = ApiError;
