require('dotenv').config();
const {Pool} = require('pg');

let dbParams = {};

  dbParams = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  };

  const pool = new Pool(dbParams)

  pool.connect(()=> {
    console.log("CONNECTED TO DB")
  })

module.exports = pool;