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
        console.log(error.message);
    }
}

export const updateNews = (id, updatedNewsPost) => async (dispatch) => {
    try {
        const { data } = await api.updateNews(id, updatedNewsPost);

        dispatch({type: "UPDATE_NEWS", payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteNews = (id) => async (dispatch) => {
    try {
        await api.deleteNews(id);
        dispatch({type: "DELETE_NEWS", payload: id});
    } catch (error) {
        console.log(error);
    }
}
