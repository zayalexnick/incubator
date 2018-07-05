import React, { Component } from 'react';
import _ from 'lodash';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import * as actions from './actions';
import LoaderContainer from '~/components/Loader';
import ResponsiveContainer from '~/components/ResponsiveContainer';
import { Container, Item } from './styles';
import setTitle from '~/utils/setTitle';

@setTitle('Новости')
@hot(module)
@connect((state) => ({
    news: state.news
}), actions)
export default class extends Component
{
    componentDidMount()
    {
        this.props.getList();
    }

    render()
    {
    	const { news } = this.props;

        return (
        	<ResponsiveContainer flex>
				<LoaderContainer loading={news.getIn(['list', 'pending']) === 'pending'}>
					<Container>
						{ news.getIn(['list', 'pending']) === 'loaded' ?
							_.map(news.getIn(['list', 'entities']), (item, index) =>
								<Item key={index} to={`/news/${item.id}`}>
									<div className="image">
										<img src={item.image} alt={item.title} />
									</div>
									<div className="category">{ item.category.category }</div>
									<h2 className="title">{ item.title }</h2>
									<p className="description">{ item.description }</p>
								</Item>
							) : null
						}
					</Container>
				</LoaderContainer>
			</ResponsiveContainer>
		);
    }
}