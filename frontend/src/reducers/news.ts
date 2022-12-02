
export default (news = [], action: any) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE_NEWS':
            return [...news, action.payload];
        default:
            return news;
    }
}
