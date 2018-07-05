import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import * as actions from '~/scenes/News/actions';
import LoaderContainer from '~/components/Loader';
import ResponsiveContainer from '~/components/ResponsiveContainer';
import { Container, Title, Content } from './styles';
import setTitle from '~/utils/setTitle';

@setTitle('Просмотр новости')
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
			<LoaderContainer loading={news.getIn(['item', 'pending']) === 'pending'}>
				<Container>
					<Title background={news.getIn(['item', 'entities']).image}>
						<span>{ news.getIn(['item', 'entities']).title }</span>
					</Title>
					<ResponsiveContainer>
						<Content dangerouslySetInnerHTML={{ __html: news.getIn(['item', 'entities']).content }} />
					</ResponsiveContainer>
				</Container>
			</LoaderContainer>
        );
    }
}