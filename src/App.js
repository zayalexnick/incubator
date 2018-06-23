import React from 'react';
import { Provider } from 'react-redux';
import configureStore from "~/redux/configureStore";

import Root from '~/scenes/Root';

export default () => (
    <Provider store={configureStore()}>
        <Root />
    </Provider>
);
