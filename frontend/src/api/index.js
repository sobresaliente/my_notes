import axios from 'axios'

const url = "http://localhost:27017/news"

export const fetchNews = () => axios.get(url)
