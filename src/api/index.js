import instance from './instance';

class Api {
    static news = async () => await instance.get('/api/news/?_expand=category');
    static current = async (id) => await instance.get(`/api/news/1?_expand=category`);
}

export default Api;