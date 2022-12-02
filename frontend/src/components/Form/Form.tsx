import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { createNews } from "../../actions/news";

const Form = () => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('aaa')
        // @ts-ignore
        dispatch(createNews(newsData))
    }
    const [newsData, setNewsData] = useState({
        title: "",
        text: "",
        tags: ""
    })

    const dispatch = useDispatch();

    console.log(newsData)
    return (
        <div>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" name="title" value={newsData.title} onChange={(e) => setNewsData({...newsData, title: e.target.value})}/>
                </label>
                <label>
                    Text:
                    <input type="text" name="text"  value={newsData.text} onChange={(e) => setNewsData({...newsData, text: e.target.value})}/>
                </label>
                <label>
                    Tags:
                    <input type="text" name="tags"  value={newsData.tags } onChange={(e) => setNewsData({...newsData, tags: e.target.value})}/>
                </label>
                <input type="submit"/>
            </form>
        </div>
    );
};

export default Form;
