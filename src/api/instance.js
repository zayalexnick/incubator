import axios from 'axios';

const instance = axios.create({
    headers: {
        'X-Api-Key': '00a120e76fcc49ea8ce7215ca15608e4'
    }
});

export default instance;