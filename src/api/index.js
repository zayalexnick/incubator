import instance from './instance';

class Api {
    static news = async () => await instance.get('/api/news/?_expand=category');
    static current = async (id) => await instance.get(`/api/news/${id}?_expand=category`);
    static login = async (login, password) => {
    	if (login.toLowerCase() !== 'admin' || password !== '12345') throw new Error('Неверные логин или пароль');
	}
}

export default Api;