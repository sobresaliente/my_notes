import React from 'react';
import NewsPost from "../../components/NewsPost/NewsPost";
import { useSelector } from "react-redux";
import Form from "../../components/Form/Form";

const News = () => {
    const news = useSelector((state: any) => state.news );
    return (
        <div>
            <Form />
            <NewsPost />
            <NewsPost />
            <NewsPost />
            <NewsPost />
            <NewsPost />

        </div>
    );
};

export default News;
