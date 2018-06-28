import api from '~/api';
import { createAction } from 'redux-actions';

export const requested = createAction('[NEWS] REQUESTED', category => category, () => ({ pending: 'pending' }));
export const received = createAction('[NEWS] RECEIVED', category => category, () => ({ pending: 'loaded' }));
export const failed = createAction('[NEWS] FAILED', category => category, () => ({ pending: 'failed' }));

export const entities = createAction('[NEWS] ENTITIES', (category, entities) => ({ category, entities }));

export const error = createAction('[NEWS] ERROR', (category, error) => ({ category, error }));