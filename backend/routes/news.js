import express from 'express';
import { getNews, createNews, updateNews } from '../controllers/news.js'

const router = express.Router();

router.get('/', getNews);
router.post('/', createNews);
router.patch('/:id', updateNews);

export default router;
