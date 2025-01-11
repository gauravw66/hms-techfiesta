const pool = require("../models/connection");

const personalInfo = async (req, res) => {
  try {
    const { fullName, dob, phone, gender, aadhar, pan, emergency, address } =
      req.body;

    if (
      !fullName ||
      !dob ||
      !phone ||
      !gender ||
      !aadhar ||
      !pan ||
      !emergency ||
      !address
    ) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const queryParams = [
      fullName,
      dob,
      phone,
      gender,
      aadhar,
      pan,
      emergency,
      address,
    ];
    // change query with actual attribute name
    const query = `INSERT INTO patient (full_name, dob , phone, gender, aadhar, pan, emergency, address) VALUES ($1, $2, $3, $4, $5, $6, $7. $8) RETURNING *`;

    const queryData = await pool.query(query, queryParams);

    return res
      .status(200)
      .json({ message: "Personal Info saved successfully" })
      .redirect("/api/user/medicalInfo1");
  } catch (err) {
    return res.send(500).json({ message: "Internal Server Error" });
  }
};

const medicalInfo1 = async (req, res) => {
  try {
    // assuming medical conditions are given as boolean
    const {
      bloodGroup,
      height,
      weight,
      diabetes,
      asthama,
      spectacles,
      dentalTreatment,
      allergies,
    } = req.body;

    if (
      !bloodGroup ||
      !height ||
      !weight ||
      !diabetes ||
      !asthama ||
      !spectacles ||
      !dentalTreatment ||
      !allergies
    ) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    // change query with actual attribute name
    const queryParams = [fullName, dob, phone, gender, aadhar, pan, emergency];
    const query = `INSERT INTO personal_info (full_name, dob , phone, gender, aadhar, pan, emergency) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;

    const queryData = await pool.query(query, queryParams);

    return res
      .status(200)
      .json({ message: "Medical Info1 saved successfully" });
  } catch (err) {
    return res.send(500).json({ message: "Internal Server Error" });
  }
};

const medicalInfo2 = async (req, res) => {
  try {
    const { intoxicants, smoking, drinking, others } = req.body;

    if (!intoxicants || !smoking || !drinking || !others) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    // change query with actual attribute name
    const queryParams = [fullName, dob, phone, gender, aadhar, pan, emergency];
    const query = `INSERT INTO personal_info (full_name, dob , phone, gender, aadhar, pan, emergency) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;

    const queryData = await pool.query(query, queryParams);

    return res
      .status(200)
      .json({ message: "Medical Info2 saved successfully" });
  } catch (err) {
    return res.send(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  personalInfo,
  medicalInfo1,
  medicalInfo2,
};
