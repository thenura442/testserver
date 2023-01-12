const express = require("express");

router = express.Router();

const user = require("../Controller/controller");

router.post("/reg", user.createUser);

module.exports = router;