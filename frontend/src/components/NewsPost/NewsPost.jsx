import React, {useEffect} from 'react';
import { useDispatch } from "react-redux";
import {deleteNews, getNews} from "../../actions/news";

const NewsPost = ({newsPost, setNewsId}) => {
    const dispatch = useDispatch();

    const onDelete = () => {
        dispatch(deleteNews(newsPost._id));
    }
    return (
        <div className="ml-40 mt-28 border-amber-50 border-2 w-1/3 h-1/4 p-8">
            <h2 className="text-xl font-medium accent-indigo-50">
                {newsPost.title}
            </h2>
            <div>
                {newsPost.text}
            </div>
            <div>
                {newsPost.tags}
            </div>
            <span>{newsPost.createdAt.slice(0, 10)}</span>
            <button onClick={onDelete} className="ml-20">Delete news</button>
            <button onClick={() => setNewsId(newsPost._id)} className="ml-5">Edit news</button>
        </div>
    );
};

export default NewsPost;
