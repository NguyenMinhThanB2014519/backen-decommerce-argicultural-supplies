const express = require("express");
const cors = require("cors");
const app = express();
const loginRoute = require("./routes/login.route");
const category = require("./routes/category.Router");
const products = require("./routes/products");
const dbConnect = require("./data/connecttion");

app.use(cors());
app.use(express.json());

// // Xóa route trùng lặp
// dbConnect.query("SELECT * FROM account", (err, results) => {
//   if (err) {
//     console.error("Lỗi truy vấn: " + err);
//     return;
//   }
//   console.log("Kết quả:", results);
// });
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the API",
  });
});

app.use("/login", loginRoute);
app.use("/category", category);
app.use("/products", products);

// Connect to the database

module.exports = app;
