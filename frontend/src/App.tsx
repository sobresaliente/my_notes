import React, {useEffect} from 'react';
import './App.css';
import Header from "./UI/Header/Header";
import { useDispatch } from "react-redux";
import { getNews } from './actions/news';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(getNews())
    }, [dispatch])
    return (
        <Header />
    );
}

export default App;
