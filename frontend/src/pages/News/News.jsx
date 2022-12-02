import React from 'react';
import NewsPost from "../../components/NewsPost/NewsPost";
import { useSelector } from "react-redux";
import Form from "../../components/Form/Form";

const News = () => {
    const news = useSelector((state) => state.news );

    return (
        <div>
            <Form />
            {news.map((newsPost) => <NewsPost key={newsPost._id} newsPost={ newsPost }/>)}

        </div>
    );
};

export default News;
