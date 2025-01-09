const express = require("express");
const router = express.Router();
const addPatient = require("../controllers/addPatientController");

router.post("/", addPatient);

module.exports = router;
