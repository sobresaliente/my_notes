import axios from 'axios'

const url = "http://localhost:5000/news"

export const fetchNews = () => axios.get(url)

export const createNews = (newNewsPost) => axios.post(url, newNewsPost)

export const updateNews = (id, updatedNewsPost) => axios.patch(`${url}/${id}`, updatedNewsPost);
