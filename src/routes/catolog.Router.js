const express = require("express");
const catalogController = require("../controllers/catalog.controller");
const { methodNotAllowed } = require("../controllers/errors.controller");
const router = express.Router();

router.route("/").get(catalogController.readCatalogs).all(methodNotAllowed);
router
  .route("/:id")
  .get(catalogController.getCatalogById)
  .all(methodNotAllowed);
module.exports = router;
