import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import * as actions from './actions';

@hot(module)
@connect((state) => ({
    news: state.news
}), actions)
export default class extends Component
{
    componentDidMount()
    {

    }

    render()
    {
        return null;
    }
}