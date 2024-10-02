const express = require("express");
const accountController = require("../controllers/account.controller");
const { methodNotAllowed } = require("../controllers/errors.controller");
const router = express.Router();

router.route("/").get(accountController.readUser).all(methodNotAllowed);

module.exports = router;
