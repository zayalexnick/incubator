import api from '~/api';
import { createAction } from 'redux-actions';

export const requested = createAction('[NEWS] REQUESTED', payload => payload, () => ({ pending: 'pending' }));
export const received = createAction('[NEWS] RECEIVED', category => category, () => ({ pending: 'loaded' }));
export const failed = createAction('[NEWS] FAILED', category => category, () => ({ pending: 'failed' }));

export const entities = createAction('[NEWS] ENTITIES', (entities) => ({ entities }));
export const entity = createAction('[NEWS] ENTITY', (entity) => ({ entity }));

export const error = createAction('[NEWS] ERROR', (error) => ({ error }));

export const getNews = () => async (dispatch) => {
    try
    {
        dispatch(requested());

        const { data } = await api.news();

        dispatch(entities(data));
        dispatch(received());
    }
    catch (e)
    {
        dispatch(failed());
        dispatch(error(e.message));
    }
};

export const getCurrent = (id) => async (dispatch) => {
    try
    {
        dispatch(requested());

        const { data } = await api.current(id);

        dispatch(entity(data));
        dispatch(received());
    }
    catch (e)
    {
        dispatch(failed());
        dispatch(error(e.message));
    }
};