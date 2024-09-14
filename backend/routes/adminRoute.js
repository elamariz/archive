import express from 'express';
import { register } from '../controller/adminController.js';

const router = express.Router();

// register
router.post("/", register);

export default router;