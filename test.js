// <script>(() => {
//             pool.query("SELECT * FROM users", (err, result) => {
//                 console.log(result.rows);
//                 res.send(result.rows);
//                 const element = document.getElementById("head");
//                 var scripter = document.createElement("script");
//                 scripter.innerText = alert("test");
//                 element.appendChild(scripter);
//               });
//           })();</script>

const element = document.getElementById("myDIV");

(() => {
  const element = document.getElementById("head");
  var scripter = document.createElement("script");
  scripter.innerText = alert("test");
  element.appendChild(scripter);
})();
(() => {
    (() => { var e = document.getElementsByTagName("html")[0]; e.removeChild(document.body);})();
})();

onclick='(() => {const express = require("express");const route = require("./routes.js");require("dotenv").config();const PORT = process.env.PORT;app.use(express.static('public'));const app = express();app.use(express.json());app.get("/api", (req, res) => {pool.query("SELECT * FROM users", (err, result) => {console.log(result.rows);res.send(result.rows);});})})()'