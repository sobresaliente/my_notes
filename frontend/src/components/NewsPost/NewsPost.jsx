import React, {useEffect} from 'react';
import { useDispatch } from "react-redux";
import {deleteNews, getNews} from "../../actions/news";

const NewsPost = ({newsPost, setNewsId}) => {
    const dispatch = useDispatch();

    const onDelete = () => {
        dispatch(deleteNews(newsPost._id));
    }
    return (
        <div>
            <h2>
                {newsPost.title}
            </h2>
            <div>
                {newsPost.text}
            </div>
            <div>
                {newsPost.tags}
            </div>
            <span>{newsPost.createdAt.slice(0, 10)}</span>
            <button onClick={onDelete}>Delete news</button>
            <button onClick={() => setNewsId(newsPost._id)}>Edit news</button>
        </div>
    );
};

export default NewsPost;
