const express = require("express");
const route = require("./routes.js");
require("dotenv").config(); 
const PORT = process.env.PORT;
const { faker } = require('@faker-js/faker');
const randomName = faker.name.findName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomCard = faker.helpers.createCard(); // random contact card containing many properties
// console.log(randomEmail, randomName, faker.image.avatar())

const app = express();
app.use(express.json());

app.use(express.static('public'));

app.get("/api", (req, res) => {
    console.log(req.params)
    console.log("using fetch")
    route.retrieve(res)
    

})
app.post("/api", (req, res) => {
    route.addNew(res)
    console.log('postin SON')
})
app.listen(PORT, () => {
  console.log(`listing on port ${PORT}`);
});
