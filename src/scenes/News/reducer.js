import { handleActions, combineActions } from 'redux-actions';
import { Map, List } from 'immutable';
import * as actions from './actions';

const initialState = Map({
    pending: null,
    entities: List([]),
    entity: null,
    error: null
});

const reducer = handleActions({
    [combineActions(actions.requested, actions.received, actions.failed)]: (state, { payload, meta }) => state.set('pending', meta.pending),
    [actions.entities]: (state, { payload }) => state.set('entities', payload.entities),
    [actions.entity]: (state, { payload }) => state.set('entity', payload.entity),
    [actions.error]: (state, { payload }) => state.set('error', payload.error)
}, initialState);

export default reducer;
