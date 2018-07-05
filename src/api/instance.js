import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:5555' : ''
});

export default instance;