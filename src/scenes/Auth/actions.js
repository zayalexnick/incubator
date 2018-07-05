import api from '~/api';
import { createAction } from 'redux-actions';

export const requested = createAction('[AUTH] REQUESTED', payload => payload, () => ({ pending: 'pending' }));
export const success = createAction('[AUTH] SUCCESS', payload => payload, () => ({ pending: 'success' }));
export const failed = createAction('[AUTH] FAILED', payload => payload, () => ({ pending: 'failed' }));
export const reset = createAction('[AUTH] RESET', payload => payload, () => ({ pending: null }));

export const error = createAction('[AUTH] ERROR', (error) => ({ error }));

export const login = ({ login, password }) => async (dispatch) => {
	try
	{
		dispatch(requested());

		await api.login(login, password);

		localStorage.setItem('authorization', 'true');

		dispatch(success());
		dispatch(reset());
	}
	catch (e)
	{
		dispatch(failed());
		dispatch(error(e.message));
	}
};

export const logout = () => async (dispatch) => {
	try
	{
		dispatch(requested());

		await localStorage.removeItem('authorization');

		dispatch(success());
		dispatch(reset());
	}
	catch (e)
	{
		dispatch(failed());
		dispatch(error(e.message));
	}
};