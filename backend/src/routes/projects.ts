import express from 'express';
import { createProject, deleteProject, getProjects, updateProject } from '../controllers/projects.js';

const router = express.Router();

router.get('/', getProjects);
router.post('/', createProject);
router.patch('/:id', updateProject);
router.delete('/:id', deleteProject);

export default router;
