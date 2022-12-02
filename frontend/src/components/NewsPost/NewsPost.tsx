import React from 'react';

const NewsPost = ({newsPost} : any) => {
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
            <button>Delete news</button>
        </div>
    );
};

export default NewsPost;
