import * as api from '../api';

export const getNews = () => async (dispatch: any) => {
    try {
        const { data } = await api.fetchNews();

        dispatch({ type: "FETCH_ALL", payload: data})
    } catch (error) {
        console.log(error.message);
    }

}
