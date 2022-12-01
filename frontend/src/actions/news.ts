import * as api from '../api';

export const getNews = () => async (dispatch: any) => {
    const action = {type: "FETCH_ALL", payload: []}

    dispatch(action);
}
