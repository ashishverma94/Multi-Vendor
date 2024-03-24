const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const ErrorHandler = require("./middleware/error.js");
   
const app = express();

app.use(cors(
  {
    origin:["http://localhost:5173"],
    credentials: true
  }
));
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
const shop = require("./controller/shop.js");
const event = require("./controller/event.js");
const product = require("./controller/product.js");

app.use("/api/v2/user", user);
app.use("/api/v2/shop", shop);
app.use("/api/v2/event", event);
app.use("/api/v2/product", product);

app.use(ErrorHandler);
module.exports = app;
