import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { Redirect } from '@reach/router';
import * as actions from '~/scenes/Auth/actions';
import Authorization from '~/utils/Authorization';
import setTitle from '~/utils/setTitle';
import ResponsiveContainer from '~/components/ResponsiveContainer';
import Button from '~/components/Button';
import Code from '~/components/Code';
import { Container, Row } from './styles';

@hot(module)
@Authorization(true, '/auth')
@connect((state) => ({
	auth: state.auth
}), actions)
@setTitle('Профиль')
export default class extends Component
{
	_logout = () => this.props.logout();

    render()
    {
    	const { auth } = this.props;

		if (auth.get('pending') === 'success') return <Redirect to="/" noThrow />;

        return (
            <ResponsiveContainer flex>
				<Container>
					<Row><h1>Профиль</h1></Row>
					<Row>Ссылка на github:</Row>
					<Row><a href="https://github.com/zayalexnick/incubator">https://github.com/zayalexnick/incubator</a></Row>
					<Row>Запуск сервера:</Row>
					<Row><Code>yarn server</Code><span>или</span><Code>npm run server</Code><span>доступ к приложению</span><a href="http://localhost:5555">http://localhost:5555</a></Row>
					<Row>Запуск webpack-dev-server:</Row>
					<Row><Code>yarn start:dev</Code><span>или</span><Code>npm run start:dev</Code><span>доступ к приложению</span><a href="//localhost:2253">http://localhost:2253</a></Row>
					<Row>Сборка:</Row>
					<Row><Code>yarn build:prod</Code><span>или</span><Code>npm run build:prod</Code></Row>
					<Row>Ссылка:</Row>
					<Row><Code>yarn build:prod</Code><span>или</span><Code>npm run build:prod</Code></Row>
					<Button onClick={this._logout}>Выйти</Button>
				</Container>
			</ResponsiveContainer>
        );
    }
}