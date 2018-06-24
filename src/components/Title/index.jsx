import React from 'react';
import { Container } from './styles';

export default ({ children }) => (
    <Container>
        <span>{ children }</span>
    </Container>
);