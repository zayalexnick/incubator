import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';

export default () =>
    process.env.NODE_ENV === 'development' ?
        createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))) :
        createStore(rootReducer, compose(applyMiddleware(thunk)));