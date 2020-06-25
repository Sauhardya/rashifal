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
    Taurus: String,
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
var query1 = { date: output, sign: "Leo" };
var query2 = { date: output, sign: "Aries" };
var query3 = { date: output, sign: "Pisces" };
var query4 = { date: output, sign: "Capricorn" };
var query5 = { date: output, sign: "Gemini" };
var query6 = { date: output, sign: "Scorpio" };
var query7 = { date: output, sign: "Libra" };
var query8 = { date: output, sign: "Virgo" };
var query9 = { date: output, sign: "Aquarius" };
var query10 = { date: output, sign: "Cancer" };
var query11 = { date: output, sign: "Sagittarius" };
var query12 = { date: output, sign: "Sagittarius" };
//main page:
app.get("/", function (req, res) {
  res.send(
    "============================== \n **********ZODIAC API********** \n 0101Author-Sauhardya Singha010 \n =============================="
  );
});

//Leo
app.get("/api/zodiac/leo", function (req, res) {
  zodiac.find(query1, function (err, result) {
    res.send(result);
  });
});

//Aries
app.get("/api/zodiac/aries", function (req, res) {
  zodiac.find(query2, function (err, result) {
    res.send(result);
  });
});

//Pisces
app.get("/api/zodiac/pisces", function (req, res) {
  zodiac.find(query3, function (err, result) {
    res.send(result);
  });
});

//Capricorn
app.get("/api/zodiac/capricorn", function (req, res) {
  zodiac.find(query4, function (err, result) {
    res.send(result);
  });
});

//Gemini
app.get("/api/zodiac/gemini", function (req, res) {
  zodiac.find(query5, function (err, result) {
    res.send(result);
  });
});

//Scorpio
app.get("/api/zodiac/scorpio", function (req, res) {
  zodiac.find(query6, function (err, result) {
    res.send(result);
  });
});

//Libra
app.get("/api/zodiac/libra", function (req, res) {
  zodiac.find(query7, function (err, result) {
    res.send(result);
  });
});

//Virgo
app.get("/api/zodiac/virgo", function (req, res) {
  zodiac.find(query8, function (err, result) {
    res.send(result);
  });
});

//Aquarius
app.get("/api/zodiac/aquarius", function (req, res) {
  zodiac.find(query9, function (err, result) {
    res.send(result);
  });
});

//Cancer
app.get("/api/zodiac/cancer", function (req, res) {
  zodiac.find(query10, function (err, result) {
    res.send(result);
  });
});

//Sagittarius
app.get("/api/zodiac/sagittarius", function (req, res) {
  zodiac.find(query11, function (err, result) {
    res.send(result);
  });
});

//Taurus
app.get("/api/zodiac/sagittarius", function (req, res) {
  zodiac.find(query12, function (err, result) {
    res.send(result);
  });
});
