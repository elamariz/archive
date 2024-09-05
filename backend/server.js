import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Project from './models/projectsModel.js';

dotenv.config();

const app = express();

app.get("/", (req,res) => {
    res.send("Server is ready");
});

app.use(express.json());

app.post("/api/projects", async (req,res) => {
    const project = req.body;

    if (!project.title || !project.proponents || !project.publishedDate || !project.abstract || !project.keywords) {
        return res.status(400).json({ success: false, message: "Please fill all fields" });
    }

    const newProject = new Project(project);

    try {
        await newProject.save();
        res.status(201).json({success: true, message: "Project creation is successful"});
    } catch (error) {
        console.error("Error in project creation", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }
})

app.listen(5001, () => {
    connectDB();
    console.log("Server started at http://localhost:5001")
});