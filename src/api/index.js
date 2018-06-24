import instance from './instance';

class Api {
    static getPopular = async () => await instance.get('/api/top-headlines?language=ru');
    static getBusiness = async () => await instance.get('/api/top-headlines?language=ru&category=business');
    static getSport = async () => await instance.get('/api/top-headlines?language=ru&category=sport');
}

export default Api;