
export default (news = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE_NEWS':
            return [...news, action.payload];
        case 'UPDATE_NEWS':
            return news.map((newsPost) => newsPost.id === action.payload._id ? action.payload : newsPost);
        default:
            return news;
    }
}
