require("dotenv").config();
const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } = process.env;

const mysql = require("mysql2");

const pool = mysql.createConnection({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  connectionLimit: 10,
});

pool.connect((err) => {
  if (err) {
    console.error("Kết nối thất bại: " + err.stack);
    return;
  }
  console.log("successfully");
});

module.exports = pool;
