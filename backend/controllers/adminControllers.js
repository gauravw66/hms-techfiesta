const pool = require("../models/connection");

const addPatient = async (req, res) => {
  try {
    // adding dummy patient
    // change with actual query
    const query = `
    INSERT INTO Patient (
    patient_id,
    patient_name,
    date_of_birth,
    sex,
    aadhar_pan,
    address,
    email
    ) 
    VALUES (
        12345,               -- patient_id (Replace with actual patient ID)
        'John Doe',          -- patient_name (Replace with actual patient name)
        '1990-01-01',        -- date_of_birth (Replace with actual date of birth)
        'Male',              -- sex (Replace with actual sex)
        'XXXX-XXXX-XXXX',    -- aadhar_pan (Replace with actual Aadhar/PAN number)
        '123 Street, City',  -- address (Replace with actual address, can be NULL)
        'john.doe@example.com' -- email (Replace with actual email)
    );
    `;
    const queryData = pool.query(query);
    res.status(200).json({
      msg: "testing to add patient success",
    });
  } catch (err) {
    res.status(500).json({
      msg: "we fucked up",
    });
  }
};

module.exports = addPatient;
