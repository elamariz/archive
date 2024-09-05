import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();

app.get("/", (req,res) => {
    res.send("Server is ready");
});

app.post("/projects", async (req,res) => {
    const project = req.body;

    if (!project.title) {
        return res.
    }
})

app.listen(5001, () => {
    connectDB();
    console.log("Server started at http://localhost:5001")
});

// username: rrosco
// password: ztw0lM2KjU8aOLat