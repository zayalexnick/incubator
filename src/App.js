import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import moment from 'moment';

import configureStore from "~/redux/configureStore";
import '~/theme/baseStyles';
import Root from '~/scenes/Root';
import theme from '~/theme';

moment.locale('ru');

export default () => (
    <Provider store={configureStore()}>
        <ThemeProvider theme={theme}>
            <Root />
        </ThemeProvider>
    </Provider>
);
