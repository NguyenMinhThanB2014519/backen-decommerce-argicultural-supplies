const ApiError = require("../api-error");
function methodNotAllowed(req, res, next) {
  if (req.route) {
    const httpMethod = Object.keys(req.route.methods)
      .filter((method) => method !== "all")
      .map((method) => method.toUpperCase());
    return next(
      new ApiError(405, "Method not allowed", {
        Allow: httpMethod.join(""),
      })
    );
  }
  return next();
}
function resourceNotFound(req, res, next) {
  // Handler for unknown URL path.
  // Call next() to pass to the error handling function.
  return next(new ApiError(404, "Resource not found"));
}
module.exports = {
  methodNotAllowed,
  resourceNotFound,
};
