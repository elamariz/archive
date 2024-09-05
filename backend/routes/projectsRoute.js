import express from 'express';
import { addProject, deleteProject, getProject, getProjectList, updateProject } from '../controller/projectController.js';

const router = express.Router();

// getProjectList
router.get("/", getProjectList);

// getProject
router.get("/:id", getProject);

// addProject
router.post("/", addProject)

// updateProject
router.put("/:id", updateProject);

// deleteProject
router.delete("/:id", deleteProject);

export default router;