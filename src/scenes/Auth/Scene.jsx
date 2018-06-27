import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Background, Form, Label, Input, Button } from './styles';
import checkAuth from "~/utils/checkAuth";

@hot(module)
@checkAuth
export default class extends Component
{

    state = {
        login: '',
        password: ''
    };

    _login = () => {
        
    };

    render()
    {
        const { login, password } = this.state;

        return (
            <Background image={require('assets/main.jpg')}>
                <Form>
                    <Label>
                        Логин
                        <Input type="text" value={login} onChange={(e) => this.setState({ login: e.target.value })} />
                    </Label>
                    <Label>
                        Пароль
                        <Input type="password" value={password} onChange={(e) => this.setState({ password: e.target.value })} />
                    </Label>
                    <Button onClick={this._login}>Войти</Button>
                </Form>
            </Background>
        );
    }
}