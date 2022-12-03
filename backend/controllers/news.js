import NewsPost from '../news/newsModels.js'
import mongoose from "mongoose";

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
    const updatedNewsPost = await NewsPost.findByIdAndUpdate(_id, {...newNewsPost, _id}, {new: true})
    res.json(updatedNewsPost);
}

export const deleteNews = async (req, res) => {
    const {id: _id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("Not found");
    }

    await NewsPost.findByIdAndRemove(_id);
    res.json({message: "News post deleted"});
}
