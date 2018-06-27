import React from 'react';

export default (WrapperComponent) => class extends WrapperComponent
{
    async componentDidMount()
    {
        const { navigate } = this.props;

        if (await localStorage.getItem('auth') && !WrapperComponent.isLogged) {
            await navigate('/');
        }
        else if (!await localStorage.getItem('auth') && WrapperComponent.isLogged) {
            await navigate(WrapperComponent.redirect);
        }

        super.componentDidMount ? super.componentDidMount() : null
    }
}