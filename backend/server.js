import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import projectRoutes from './routes/projectsRoute.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001

app.get("/", (req,res) => {
    res.send("Server is ready");
});

// middleware
app.use(express.json());

app.use("/api/projects", projectRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});