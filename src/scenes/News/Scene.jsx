import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import * as actions from './actions';

import ResponsiveContainer from '~/components/ResponsiveContainer';
import Content from '~/components/Content';
import { Row, Col } from '~/components/Grid';
import Popular from './Popular';
import Business from './Business';

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
        return (
            <ResponsiveContainer>
                <Content>
                    <Popular />
                    <Business />
                    <Row>
                        <Col lg={3/4}>

                        </Col>
                        <Col lg={1/4}>

                        </Col>
                    </Row>
                </Content>
            </ResponsiveContainer>
        );
    }
}