import React, {useState} from 'react';
import NewsPost from "../../components/NewsPost/NewsPost";
import { useSelector } from "react-redux";
import Form from "../../components/Form/Form";

const News = () => {
    const news = useSelector((state) => state.news );

    const [newsId, setNewsId] = useState(null);
    return (
        <div>
            <Form newsId={newsId} setNewsId={setNewsId} />
            {news.map((newsPost) => <NewsPost key={newsPost._id} newsPost={ newsPost } setNewsId={setNewsId}/>)}
        </div>
    );
};

export default News;
