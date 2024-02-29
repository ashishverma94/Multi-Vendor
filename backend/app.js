const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const ErrorHandler = require("./middleware/error.js");

const app = express();


app.use(cors());
app.use(ErrorHandler);
app.use(express.json());
app.use(cookieParser());
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
  res.end("Hello test!");
});

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}
// import routes
const user = require("./controller/user.js");
app.use("/api/v2/user", user);

module.exports = app;
