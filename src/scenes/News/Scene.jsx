import React, { Component } from 'react';
import _ from 'lodash';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import * as actions from './actions';
import ResponsiveContainer from '~/components/ResponsiveContainer';
import { Container, Item, Image, Category, Title, Description } from './styles';

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
        	<ResponsiveContainer>
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
			</ResponsiveContainer>
		);
    }
}