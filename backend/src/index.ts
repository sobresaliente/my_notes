import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import newsRoutes from './routes/news.js';
import projectsRoutes from './routes/projects.js';
import notesRoutes from './routes/notes.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/news', newsRoutes);
app.use('/projects', projectsRoutes);
app.use('/notes', notesRoutes);

const PORT = 5000;
const db = 'mongodb://localhost/';

try {
  mongoose.connect(db, () => app.listen(PORT, () => console.log('Server started')));
} catch (e) {
  console.log('could not connect');
}
