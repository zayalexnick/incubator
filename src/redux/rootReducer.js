import { combineReducers } from 'redux';

import { reducer as newsReducer } from '~/scenes/News';
import { reducer as authReducer } from '~/scenes/Auth';

export default combineReducers({
    news: newsReducer,
	auth: authReducer
})