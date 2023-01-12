const express = require("express");

router = express.Router();

const staff = require("../Controller/controller-staff");

router.post("/staff/register", staff.createUser);
router.get("/staff", staff.createUser);

module.exports = router;
