import Project from "../models/projectsModel.js";

export const getProjectList = async (req, res) => {
    try {
        const projects = await Project.find({});
        res.status(200).json({success: true, data: projects})
    } catch (error) {
        res.status(500).json({success: false, message: "Project list fetch error"})
    }
}

export const getProject = async (req, res) => {
    const {id} = req.params;
    
    try {
        const project = await Project.findById(id);
        res.status(200).json({status: true, message: `Project found ${project}`});
    } catch (error) {
        res.status(404).json({success: false, message: "Project not found"});
    }
}

export const addProject = async (req,res) => {
    const project = req.body;

    if (!project.title || !project.proponents || !project.publishedDate || !project.abstract || !project.keywords) {
        return res.status(400).json({ success: false, message: "Please fill all fields" });
    }

    const newProject = new Project(project);

    try {
        await newProject.save();
        res.status(201).json({success: true, message: "Project created"});
    } catch (error) {
        console.error("Error in project creation", error.message);
        res.status(500).json({success: false, message: "Project creation failed"});
    }
}

export const updateProject = async (req, res) => {
    const { id } = req.params;
    const project = req.body;
    try {
        const updatedProject = await Project.findByIdAndUpdate(id, project, {new: true});
        res.status(200).json({success: true, data: updatedProject});
    } catch (error) {
        res.status(500).json({success: false, message: "Server Error"});
    }
}

export const deleteProject =  async (req, res) => {
    const {id} = req.params;
    try {
        await Project.findByIdAndDelete(id);
        res.status(200).json({status: true, message: "Project deleted"});
    } catch (error) {
        res.status(404).json({success: false, message: "Project not found"});
    }
}