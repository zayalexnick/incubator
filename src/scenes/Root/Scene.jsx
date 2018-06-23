import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Router } from './styles';

import Header from '~/modules/Header';

import Main from '~/scenes/Main';
import News from '~/scenes/News';
import Profile from '~/scenes/Profile';

@hot(module)
export default class extends Component
{
    render()
    {
        return (
            <main>
                <Header />
                <section>
                    <Router>
                        <Main path="/" />
                        <News path="/news" />
                        <Profile path="/profile" />
                    </Router>
                </section>
            </main>
        );
    }
}