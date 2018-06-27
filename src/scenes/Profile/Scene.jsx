import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import checkAuth from '~/utils/checkAuth';

@hot(module)
@checkAuth
export default class extends Component
{
    static isLogged = true;
    static redirect = '/auth';

    render()
    {
        return (
            <h1>Profile</h1>
        );
    }
}