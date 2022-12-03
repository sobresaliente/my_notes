import NewsPost from '../news/newsModels.js'
import mongoose, {Mongoose} from "mongoose";

export const getNews = async (req, res) => {
    try {
        const news = await NewsPost.find();
        res.status(200).json(news);
    } catch(error) {
        res.status(404).json({ message: error.message })
    }
}

export const createNews = async (req, res) => {
    const newsPost = req.body;

    const newNewsPost = new NewsPost(newsPost);

    try {
        await newNewsPost.save();

        res.status(201).json(newNewsPost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updateNews = async (req, res) => {
    const {id: _id} = req.params;
    const newNewsPost = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("Not found");
    }
    const updatedNewsPost = await NewsPost.findByIdAndUpdate(_id, newNewsPost, {new: true})
    res.json(updatedNewsPost);
}
