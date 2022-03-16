const express = require("express");
const route = require("./routes.js");
require("dotenv").config(); 
const PORT = process.env.PORT;
const { faker } = require('@faker-js/faker');

// console.log(randomEmail, randomName, faker.image.avatar())

const app = express();
app.use(express.json());

app.use(express.static('public'));

app.get("/api/:index?", (req, res) => {
    console.log("using fetch")
    route.retrieve(res, req.params.index, req)
    
})
app.post("/api", (req, res) => {
    // route.addNew(res)
    // console.log('postin SON')
    console.log(req.body.phone)
    route.addNew(res, req.body.name, faker.image.avatar(), req.body.address, req.body.phone);
    console.log(req.body.address)
    
})


app.patch("/api", (req, res) => {
  console.log(req.body);
  if (req.body.name === '') {
    req.body.name = null
  } 
  if (req.body.address === '') {
    req.body.address = null
 
  } 
  if (req.body.phone === '') {
    req.body.phone = null
  } 
  if (req.body.photo === '') {
    req.body.photo = null
 
  } 
  route.updateExisting(req, res);
});

app.delete("/api", (req, res) => {
  console.log("attempting to send data to routes file")
  route.deleteContact(res, req.body.id);
});
// console.log(faker.image.avatar())

// function fakeFriends(){

//   const randomName = faker.name.findName(); // Rowan Nikolaus
// const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// const randomCard = faker.helpers.createCard(); // random contact card containing many properties
// // console.log(faker);
// req = {}
// req.name = randomName
// req.photo = faker.image.avatar()
// req.address = faker.address.streetName();
// req.phone = faker.phone.phoneNumber();

// // name, photo, address, phone


// }

// app.post("/api/1", (req, res) => {
//   // route.addNew(res)
//   // console.log('postin SON')
//   // console.log(req.body.phone)
//   for(var i = 0; i < 5; i++){
//   route.addNew(res, faker.name.findName(), faker.image.avatar(), faker.address.streetAddress(), faker.phone.phoneNumber())
//   // console.log(req.body.address)
//   }
  
// });
app.listen(PORT, () => {
  console.log(`listing on port ${PORT}`);
});
// console.log(faker.name.findName(), faker.image.avatar(), faker.address.streetAddress(), faker.phone.phoneNumber());
