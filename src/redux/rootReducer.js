import { combineReducers } from 'redux';

import { reducer as newsReducer } from '~/scenes/News';

export default combineReducers({
    news: newsReducer
})