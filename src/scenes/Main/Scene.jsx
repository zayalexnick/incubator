import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Background, Welcome, Logo, Title } from './styles';

@hot(module)
export default class extends Component
{
    render()
    {
        return (
            <Background image={require('assets/main.jpg')}>
                <Welcome>
                    <Logo src={require('assets/logo.png')} />
                    <Title>Добро пожаловать</Title>
                </Welcome>
            </Background>
        );
    }
}