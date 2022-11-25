import NewsPost from '../news/newsModels.js'

export const getNews = async (req, res) => {
    try {
        const news = await NewsPost.find();
        console.log(news);

        res.status(200).json(news);
    } catch(error) {
        res.status(404).json({ message: error.message })
    }
}

export const createNews = async (req, res) => {
    const newsPost = req.body;

    const newNewsPost = new NewsPost(newsPost);

    try {
        await newPost.save(newNewsPost);

        res.status(201).json(newNewsPost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}
