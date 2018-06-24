import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Page } from './styles';

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
            <Router>
                <Page>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route exact path="/news" component={News} />
                        <Route exact path="/profile" component={Profile} />
                    </Switch>
                </Page>
            </Router>
        );
    }
}