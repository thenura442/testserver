const express = require("express");

router = express.Router();

router.use("/staff", require("./staff.routes"));
// router.use("/users", require("./registration-route"));

const staff = require("../Controller/controller-staff");
router.post("/staff/register", staff.createUser);

router.get("/staff", staff.createUser);

module.exports = router;
