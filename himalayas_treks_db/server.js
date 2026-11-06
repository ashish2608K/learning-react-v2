import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.static("public"));

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    root: process.env.ROOT,
})

app.get("api/treks", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM TREKS")
        res.json[rows]
    }
    catch (err) {
        console.error(err)
        res.status(5000).json ({message : "DATABASE MAI ERROR HAI "})
    }
});

app.listen(5000 , () => console.log("API https://localhost:5000"))