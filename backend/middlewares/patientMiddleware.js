const pool = require("../models/connection");

const isAuthenticated = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        error: true,
        message: "You must be logged in to perform this action.",
      });
    }

    const token = authHeader.replace("Bearer ", "");
    const tokenQueryParams = [token];
    const tokenQuery = `SELECT * FROM user_token WHERE token = $1`;
    const tokenQueryData = await pool.query(tokenQuery, tokenQueryParams);

    if (tokenQueryData.rowCount < 1) {
      return res.status(401).json({ error: true, message: "Invalid Token!" });
    }

    const userId = tokenQueryData.rows[0].fk_user;
    const userQuery = `SELECT id FROM users WHERE id = $1`;
    const userQueryParams = [userId];
    const userQueryData = await pool.query(userQuery, userQueryParams);

    req.user = userQueryData.rows[0];
    req.token = token;
    next();
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal Server Error!" });
  }
};

module.exports = isAuthenticated;
