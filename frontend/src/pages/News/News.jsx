import React, {useEffect, useState} from 'react';
import NewsPost from "../../components/NewsPost/NewsPost";
import {useDispatch, useSelector} from "react-redux";
import Form from "../../components/Form/Form";
import {getNews} from "../../actions/news";

const News = () => {
    const news = useSelector((state) => state.news );

    const [newsId, setNewsId] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(getNews())
    }, [newsId, dispatch])

    return (
        <div>
            <Form newsId={newsId} setNewsId={setNewsId} />
            {news.map((newsPost) => <NewsPost key={newsPost._id} newsPost={ newsPost } setNewsId={setNewsId}/>)}
        </div>
    );
};

export default News;
