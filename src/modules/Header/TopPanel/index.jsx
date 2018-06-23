import React from 'react';
import moment from 'moment';

import ResponsiveContainer from '~/components/ResponsiveContainer';
import { Container } from "./styles";

export default () => (
    <ResponsiveContainer>
        <Container>
            { moment().format('dddd, DD MMM YYYY') }
        </Container>
    </ResponsiveContainer>
);