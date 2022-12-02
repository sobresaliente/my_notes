
export default (news = [], action: any) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE_ALL':
            return news;
        default:
            return news;
    }
}
