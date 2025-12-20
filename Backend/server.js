const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/complaints", require("./routes/complaint"));

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
