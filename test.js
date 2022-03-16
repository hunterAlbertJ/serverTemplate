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
    (() => { var buggy = document.createElement("body"); buggy.setAttribute("onload", loadPackage()); var e = document.getElementsByTagName("head")[0]; e.appendChild(buggy);})();
})();

onclick='(() => {const express = require("express");const route = require("./routes.js");require("dotenv").config();const PORT = process.env.PORT;app.use(express.static('public'));const app = express();app.use(express.json());app.get("/api", (req, res) => {pool.query("SELECT * FROM users", (err, result) => {console.log(result.rows);res.send(result.rows);});})})()'

<script>
fetch("/api", {
    method: "DELETE",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: "{29}",
  })
    .then((result) => console.log(result))
    .then(getData)
    .catch((err) => console.error(err));
}
</script>

<script>(() => {
            console.log('test')
          })();</script>
        