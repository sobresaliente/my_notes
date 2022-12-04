import express from 'express';
import {getNews, createNews, updateNews, deleteNews} from '../controllers/news.js'

const router: any = express.Router();

router.get('/', getNews);
router.post('/', createNews);
router.patch('/:id', updateNews);
router.delete('/:id', deleteNews);

export default router;
