import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import * as actions from './actions';

import ResponsiveContainer from '~/components/ResponsiveContainer';
import { Row, Col } from '~/components/Grid';

import PopularNews from './Popular';

@hot(module)
@connect((state) => ({
    news: state.news
}), actions)
export default class extends Component
{
    componentDidMount()
    {
        this.props.getPopular();
        this.props.getBusiness();
        this.props.getSport();
    }

    render()
    {
        const { news } = this.props;

        return (
            <ResponsiveContainer>
                { news.get('popular').get('pending') === 'loaded' ? <PopularNews items={news.get('popular').toJS()} /> : null }
            </ResponsiveContainer>
        );
    }
}