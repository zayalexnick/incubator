import { handleActions, combineActions } from 'redux-actions';
import { Map, List } from 'immutable';
import * as actions from './actions';

const initialState = Map({
    popular: Map({
        pending: null,
        entities: List([]),
        error: null
    }),
    business: Map({
        pending: null,
        entities: List([]),
        error: null
    }),
    sport: Map({
        pending: null,
        entities: List([]),
        error: null
    })
});

const reducer = handleActions({
    [combineActions(actions.requested, actions.received, actions.failed)]: (state, { payload, meta }) => state.setIn([payload, 'pending'], meta.pending),
    [actions.entities]: (state, { payload }) => state.setIn([payload.category, 'entities'], payload.entities),
    [actions.error]: (state, { payload }) => state.setIn([payload.category, 'error'], payload.error.message)
}, initialState);

export default reducer;
