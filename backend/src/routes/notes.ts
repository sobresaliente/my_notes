import express from 'express';
import { createNote, deleteNote, getNote, updateNote } from '../controllers/notes.js';

const router = express.Router();

router.get('/', getNote);
router.post('/', createNote);
router.patch('/', updateNote);
router.delete('/', deleteNote);

export default router;
