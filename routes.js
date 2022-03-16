require("dotenv").config();
const { Pool } = require("pg");
const pool = new Pool({
  // database: process.env.DATABASE_URL,
  connectionString: process.env.DATABASE_URL,
  ssl:{
    rejectUnauthorized:false
  },
});

function retrieve(res) {
  console.log("initaiting pull from database");
  pool.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result.rows);
    }
  });
}

function addNew(res, name, card, address, phone) {
  console.log("addNew function invoked");
  pool.query(
    "INSERT INTO users (name, photo, address, phone) VALUES ($1, $2, $3, $4)",
    [name, card, address, phone],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
      res.send(result);
    }
  );
}
function updateExisting(req, res) {
  console.log('updateExisting function invoked');
  const { name, address, phone, photo, id } = req.body;
  console.log("good update start")
  const query = `
  UPDATE users SET
    name = COALESCE($1, name),
    address = COALESCE($2, address),
    phone = COALESCE($3, phone),
    photo = COALESCE($4, photo)
  WHERE id = $5
  RETURNING *
  `;
  pool.query(query, [name, address, phone, photo, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log('sent update back');
    }
  });
}

function deleteContact(res, id){
  console.log("attempting delete")
      pool.query("DELETE FROM users WHERE id = $1", [id], (err, result) => {
        if(err) {
          console.log(err)
        } else {
          console.log(result);
          res.send(result);
        }
        
      });
}
module.exports = { retrieve, addNew, updateExisting, deleteContact };

