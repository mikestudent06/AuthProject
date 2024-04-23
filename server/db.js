import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config({path:"./.env"})

const db = mysql.createConnection({
    host: process.env.localhost,
    user: process.env.user,
    password: process.env.password,
    database: process.env.db
})

db.connect((err)=> {
    if (err) {
        console.log("error", err);   
    } else {
        console.log("Mysql connected")
    }
})

export default db;