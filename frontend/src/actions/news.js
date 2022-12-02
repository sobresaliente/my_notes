import * as api from '../api';

export const getNews = () => async (dispatch) => {
    try {
        const { data } = await api.fetchNews();

        dispatch({ type: "FETCH_ALL", payload: data})
    } catch (error) {
        console.log(error.message);
    }

}

export const createNews = (newsPost) => async (dispatch) => {
    try {
        const { data } = await api.createNews(newsPost);

        dispatch({type: "CREATE_NEWS", payload: data});
    } catch (error) {
        console.log(error.message)
    }
}
