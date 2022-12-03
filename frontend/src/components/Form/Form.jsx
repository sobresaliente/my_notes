import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { createNews, updateNews } from "../../actions/news";

const Form = ({newsId, setNewsId}) => {
    const [newsData, setNewsData] = useState({
        title: "",
        text: "",
        tags: ""
    })
    const newsPost = useSelector((state) => newsId ? state.news.find((newsPost) => newsPost._id === newsId) : null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (newsPost) {
            setNewsData(newsPost)
        }
    }, [newsPost])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newsId) {
            dispatch(updateNews(newsId, newsData));
        } else {
            dispatch(createNews(newsData))
        }
    }



    return (
        <div>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" name="title" value={newsData.title || ""} onChange={(e) => setNewsData({...newsData, title: e.target.value})}/>
                </label>
                <label>
                    Text:
                    <input type="text" name="text"  value={newsData.text || ""} onChange={(e) => setNewsData({...newsData, text: e.target.value})}/>
                </label>
                <label>
                    Tags:
                    <input type="text" name="tags"  value={newsData.tags || ""} onChange={(e) => setNewsData({...newsData, tags: e.target.value})}/>
                </label>
                <input type="submit"/>
            </form>
        </div>
    );
};

export default Form;
