const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
const app = express();

//MIDDLEWARES---functions which runs only when a certain page is requested
//app.use("bodyParser.json()");

//listening to server
app.listen(3000);

//Connection to database
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("connected to db");
});

//Creating a Schema for db----
var schema = new mongoose.Schema(
  {
    date: String,
    Sign: String,
    dailyHoroscope: String,
    dailyHealthHoroscope: String,
    dailyCarrerHoroscope: String,
    dailyMoneyHoroscope: String,
  },
  { collection: "ZodiacData" }
);
var zodiac = mongoose.model("zodiac", schema);

//api call-

//date mechanism-
let dateObj = new Date();
let month = String(dateObj.getMonth() + 1).padStart(2, "0");
let day = String(dateObj.getDate()).padStart(2, "0");
let year = dateObj.getFullYear();
let output = year + "-" + month + "-" + day;

//end
var query = { date: output };
app.get("/", function (req, res) {
  zodiac.find(query, function (err, result) {
    console.log(result);
    res.send(result);
  });
});
