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
  console.log("zoi lk")
  if(isNaN(phone)){
    res.status(400)
    console.log('is caught')
    res.send("bad data")
  } else {
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
}
function updateExisting(req, res) {
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
module.exports = { retrieve, addNew, updateExisting };
// app.post("/pets", (req, res) => {
//   if (
//     req.body.name === undefined ||
//     req.body.age === undefined ||
//     req.body.kind === undefined
//   ) {
//     res.status(400);
//     res.send(
//       'Format must be "{ "name": "PET_NAME", "age": "AGE_IN_YEARS", "kind": "ANIMAL_TYPE"}"'
//     );
//   } else {
//     const { age, name, kind } = req.body;
//     const query = `
//     INSERT INTO pets (name, age, kind) VALUES ($2,$1,$3);
//     `;
//     pool.query(query, [age, name, kind]);
//   }
//   res.send("Creature Added");
// });
