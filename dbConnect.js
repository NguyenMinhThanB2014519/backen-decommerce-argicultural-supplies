require("dotenv").config();
const mysql = require("mysql2/pomise");

async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      //   port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    console.log("Kết nối thành công đến cơ sở dữ liệu!");
    return connection;
  } catch (error) {
    console.error("Lỗi kết nối đến cơ sở dữ liệu:", error);
    throw error;
  }
}

module.exports = connectToDatabase;
