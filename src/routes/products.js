const express = require("express");
const products = require("../controllers/products.controllers");
const { methodNotAllowed } = require("../controllers/errors.controller");
const router = express.Router();

router.route("/").get(products.getProducts).all(methodNotAllowed);
router
  .route("/:id")
  .get(products.getProductsByCaterogyId)
  .all(methodNotAllowed);

module.exports = router;
