import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

app.get("/api/treks", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM treks")
        res.json(rows)
    }
    catch (err) {
        console.error(err)
        res.status(500).json({ message: "Database error " })
    }
});

app.get("/api/seasons", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM seasons")
        res.json(rows)
    }
    catch (err) {
        console.error(err)
        res.status(500).json({ message: "DATABASE ERROR" })
    }
})

app.post("/api/enquiries", async (req, res) => {
    try {
        const { name, email, phone, group_size, trek, month, message } = req.body;

        if (!name || !email) {
            return res.status(400).json({ message: "Name and email are required" });
        }

        const [result] = await db.query(
            "INSERT INTO enquiries (name, email, phone, group_size, trek, month, message) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [name, email, phone || null, group_size || null, trek || null, month || null, message || null]
        );

        res.status(201).json({ id: result.insertId, message: "Enquiry received" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Database error" });
    }
});


app.listen(5000, () => console.log("API CHAL RHA HAI http://localhost:5000"))            
