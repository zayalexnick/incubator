import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Page, Router } from './styles';

import Header from '~/modules/Header';

import Main from '~/scenes/Main';
import News from '~/scenes/News';
import Profile from '~/scenes/Profile';
import Auth from '~/scenes/Auth';

@hot(module)
export default class extends Component
{
    render()
    {
        return (
            <Page>
                <Header />
                <Router>
                    <Main path="/" />
                    <News path="/news" />
                    <Profile path="/profile" />
                    <Auth path="/auth" />
                </Router>
            </Page>
        );
    }
}