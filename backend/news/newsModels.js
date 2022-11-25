import mongoose from 'mongoose'

const newsSchema = mongoose.Schema({
    title: String,
    text: String,
    tags: [String],
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const NewsPost = mongoose.model('NewsPost', newsSchema);

export default NewsPost;
