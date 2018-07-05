import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { Redirect } from '@reach/router';
import Authorization from '~/utils/Authorization';
import * as actions from './actions';
import ResponsiveContainer from '~/components/ResponsiveContainer';
import Button from '~/components/Button';
import { Form, Label, Input, Error } from './styles';
import setTitle from '~/utils/setTitle';

@setTitle('Страница входа')
@hot(module)
@Authorization(false, '/profile')
@connect((state) => ({
	auth: state.auth
}), actions)
export default class extends Component
{
	state = {
		login: '',
		password: ''
	};

	_login = () => this.props.login(this.state);

    render()
    {
    	const { login, password } = this.state;

    	const { auth } = this.props;

    	if (auth.get('pending') === 'success') return <Redirect to="/profile" noThrow />;

        return (
            <ResponsiveContainer flex>
				<Form>
					{ auth.get('error') ? <Error>{ auth.get('error') }</Error> : null }
					<Label>
						Логин
						<Input type="text" value={login} onChange={(e) => this.setState({ login: e.target.value })} />
					</Label>
					<Label>
						Пароль
						<Input type="password" value={password} onChange={(e) => this.setState({ password: e.target.value })} />
					</Label>
					<Button onClick={this._login} disabled={auth.get('pending') === 'pending'}>Войти</Button>
				</Form>
			</ResponsiveContainer>
        );
    }
}