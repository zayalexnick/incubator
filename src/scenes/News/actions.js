import api from '~/api';
import { createAction, combineActions } from 'redux-actions';

export const requested = createAction('[NEWS] REQUESTED', category => category, () => ({ pending: 'pending' }));
export const received = createAction('[NEWS] RECEIVED', category => category, () => ({ pending: 'loaded' }));
export const failed = createAction('[NEWS] FAILED', category => category, () => ({ pending: 'failed' }));

export const pendings = combineActions(requested, received, failed);

export const entities = createAction('[NEWS] ENTITIES', (category, entities) => ({ category, entities }));

export const error = createAction('[NEWS] ERROR', (category, error) => ({ category, error }));

export const getPopular = () => async (dispatch) => {
    try
    {
        dispatch(requested('popular'));

        const { data } = await api.getPopular();

        dispatch(entities('popular', data.articles));
        dispatch(received('popular'));
    }
    catch (e)
    {
        dispatch(failed('popular'));
        dispatch(error('popular', e.response.data));
    }
};

export const getBusiness = () => async (dispatch) => {
    try
    {
        dispatch(requested('business'));

        const { data } = await api.getBusiness();

        dispatch(entities('business', data.articles));
        dispatch(received('business'));
    }
    catch (e)
    {
        dispatch(failed('business'));
        dispatch(error('business', e.response.data));
    }
};

export const getSport = () => async (dispatch) => {
    try
    {
        dispatch(requested('sport'));

        const { data } = await api.getSport();

        dispatch(entities('sport', data.articles));
        dispatch(received('sport'));
    }
    catch (e)
    {
        dispatch(failed('sport'));
        dispatch(error('sport', e.response.data));
    }
};