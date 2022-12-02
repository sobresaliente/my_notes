import axios from 'axios'

const url = "http://localhost:5000/news"

export const fetchNews = () => axios.get(url)

export const create
