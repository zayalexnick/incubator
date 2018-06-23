import React from 'react';
import { Container } from "./styles";

type Props = {
    children: string
}

export default ({ children }: Props) => (
    <Container>
        <span>{ children }</span>
    </Container>
);