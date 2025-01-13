const pool = require("../models/connection");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const {
    name,
    sex,
    dob,
    aadhar,
    pan,
    address,
    phone,
    emergency_phone,
    email,
    password,
  } = req.body;

  if (
    !name ||
    !sex ||
    !dob ||
    !aadhar ||
    !pan ||
    !address ||
    !phone ||
    !emergency_phone ||
    !email ||
    !password
  ) {
    return res
      .status(400)
      .json({ error: true, message: "All fields are required!" });
  }

  try {
    const hashedPassword = await bcrypt.hash(
      password,
      Number(process.env.SALT)
    );

    const patientId = uuidv4();

    const userQuery = `INSERT INTO patient (id ,name, sex, dob, aadhar, pan, address, phone, emergency_phone, email, password) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *`;
    const userQueryParams = [
      patientId,
      name,
      sex,
      dob,
      aadhar,
      pan,
      address,
      phone,
      emergency_phone,
      email,
      hashedPassword,
    ];
    const userQueryData = await pool.query(userQuery, userQueryParams);
    const token = await generateUserToken(userQueryData.rows[0].id);
    delete userQueryData.password;

    res.status(201).json({
      error: false,
      message: "Signup Successful. Welcome aboard!",
      data: {
        token,
        user: userQueryData.rows[0],
      },
    });
  } catch (err) {
    if (err.code === "23505") {
      res.status(400).json({
        error: true,
        message:
          "User with this details already exists! Please use a different email or phone number to create your account.",
      });
    } else {
      console.log(err);
      res.status(500).json({ error: true, message: "Internal Server Error!" });
    }
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ error: true, message: "All fields are required!" });
  }

  try {
    const userQuery = `SELECT * FROM patient WHERE email = $1`;
    const userQueryParams = [email];
    const userQueryData = await pool.query(userQuery, userQueryParams);

    if (userQueryData.rowCount === 1) {
      const auth = await bcrypt.compare(
        password,
        userQueryData.rows[0].password
      );
      if (auth) {
        const token = await generateUserToken(userQueryData.rows[0].id);
        const user = userQueryData.rows[0];
        delete user.password;
        delete user.created_at;
        res.status(200).json({
          error: false,
          message: "Login Successful. Welcome back!",
          data: {
            token,
            user,
          },
        });
      } else {
        res.status(400).json({
          error: true,
          message:
            "Please ensure you've entered the correct password and try again.",
        });
      }
    } else {
      res.status(404).json({
        error: true,
        message:
          "The provided email does not match any existing user account. Please verify your credentials or consider signing up if you do not have an account.",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal Server Error!" });
  }
};

const logout = async (req, res) => {
  try {
    const token = req.token;
    const query = `DELETE FROM patient_token WHERE token = $1`;
    const queryParams = [token];
    const queryData = await pool.query(query, queryParams);

    res
      .status(200)
      .json({ error: false, message: "Logout Successful. Have a great day!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal server error!" });
  }
};

module.exports = {
  signup,
  login,
  logout,
};
