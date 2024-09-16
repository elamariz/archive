import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import projectRoutes from './routes/projectsRoute.js';
import adminRoute from './routes/adminRoute.js';
import path from "path";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors(
    {
        origin: ["archive-tau-woad.vercel.app"],
        methods: ["POST", "DELETE", "GET", "PUT"],
        credentials: true
    }
))
const PORT = process.env.PORT || 5011

const __dirname = path.resolve();

// middleware
app.use(express.json());

app.use("/api/projects", projectRoutes);
app.use("/api/admin", adminRoute);

app.get("/", (req, res) => {
    res.status(201).json({success: true, message: "Server is ready"})
})

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "/frontend/dist")));
//     app.get("*", (req, res) => {
//         console.log("render react success");
//         res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
//     })
// }

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});