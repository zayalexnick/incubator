import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import ResponsiveContainer from '~/components/ResponsiveContainer';
import Title from '~/components/Title';

@hot(module)
export default class extends Component
{
    render()
    {
        return (
            <ResponsiveContainer>
                <Title>Новости</Title>
            </ResponsiveContainer>
        );
    }
}