import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import * as actions from '~/scenes/News/actions';
import ResponsiveContainer from '~/components/ResponsiveContainer';
import { Container, Title, Content } from './styles';

@hot(module)
@connect((state) => ({
	news: state.news
}), actions)
export default class extends Component
{
	componentDidMount()
	{
		const { id } = this.props;

		this.props.getItem(id);
	}

    render()
    {
    	const { news } = this.props;

        return (
        	<Container>
				<Title background={news.getIn(['item', 'entities']).image}>
					<span>{ news.getIn(['item', 'entities']).title }</span>
				</Title>
				<ResponsiveContainer>
					<Content dangerouslySetInnerHTML={{ __html: news.getIn(['item', 'entities']).content }} />
				</ResponsiveContainer>
			</Container>
        );
    }
}