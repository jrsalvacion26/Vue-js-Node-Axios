const mysql = require('mysql2')

require('dotenv').config()


const database_config = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
})


database_config.connect(function(err){
  if(err) throw err
  console.log("database connected")
})


module.exports = database_config

