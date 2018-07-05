import React from 'react';
import { Redirect } from '@reach/router';

export default (isPrivate = true, redirectUrl = '/auth') => (WrappedComponent) => (props) => {
	if (!!localStorage.getItem('authorization') !== isPrivate) return <Redirect to={redirectUrl} noThrow />;
	return <WrappedComponent { ...props } />;
}