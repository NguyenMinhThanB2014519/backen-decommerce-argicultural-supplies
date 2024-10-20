const express = require("express");
const category = require("../controllers/category.controller");
const { methodNotAllowed } = require("../controllers/errors.controller");
const router = express.Router();

router.route("/").get(category.readCategories).all(methodNotAllowed);
router.route("/:id").get(category.getCategoryById).all(methodNotAllowed);
module.exports = router;
