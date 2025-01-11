const express = require("express");
const router = express.Router();
const {
  personalInfo,
  medicalInfo1,
  medicalInfo2,
} = require("../controllers/userControllers");

// post personal info
router.post("/personalInfo", personalInfo);

/**
 * merge medical info 1 and 2
 * for easy data appending
 */
// post medical info1
router.post("/medicalInfo/1", medicalInfo1);
// post medical info2
router.post("/medicalInfo/2", medicalInfo2);

module.exports = router;
