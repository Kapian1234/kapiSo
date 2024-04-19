import mysql from "mysql2";
import 'dotenv/config'; // 引入 dotenv 模块

export const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: process.env.DB_PASSWORD,
    database:'social'
})