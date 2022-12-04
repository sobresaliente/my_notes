
export default (news = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE_NEWS':
            return [...news, action.payload];
        case 'UPDATE_NEWS':
            return news.map((newsPost) => newsPost._id === action.payload._id ? action.payload : newsPost);
        case 'DELETE_NEWS':
            return news.filter((newsPost) => newsPost._id != action.payload)
        default:
            return news;
    }
}
