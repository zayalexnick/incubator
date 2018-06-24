import { combineReducers } from 'redux';

import newsReducer from '~/scenes/News/reducer';

export default combineReducers({
    news: newsReducer
})