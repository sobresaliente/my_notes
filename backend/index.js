import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import newsRoutes from './routes/news.js';

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))

app.use(cors());

const CONNECTION_URL_DEPLOY = "mongodb+srv://salienteNotes:<password>@cluster0.t2djgvm.mongodb.net/?retryWrites=true&w=majority"
const PORT = 5000;

app.use('/news', newsRoutes);

try {
    // Connect to the MongoDB cluster
    mongoose.connect(
        CONNECTION_URL,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => app.listen(PORT, () => console.log('Server started')),
    );
} catch (e) {
    console.log("could not connect");
}



