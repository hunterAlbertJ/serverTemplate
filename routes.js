require("dotenv").config(); 
const { Pool } =  require("pg");
const pool = new Pool({
    database: process.env.DATABASE_URL,
    ssl:{
      rejectUnauthorized:false
    },
});

function retrieve(res, index) {
console.log('initaiting pull from database')
if (index !== undefined) {
    pool.query("SELECT * FROM users WHERE id = $1", [index], (err, result) => {
      console.log(result.rows[0]);
      res.send(result.rows[0]);
    });
  } else {
    pool.query("SELECT * FROM users", (err, result) => {
      console.log(result.rows);
      res.send(result.rows);
    });
  }
}
module.exports = {retrieve};
