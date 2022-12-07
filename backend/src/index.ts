import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import newsRoutes from './routes/news.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/news', newsRoutes);

const PORT = 5000;
const db = 'mongodb://localhost/';

try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    db,

    () => app.listen(PORT, () => console.log('Server started')),
  );
} catch (e) {
  console.log('could not connect');
}
