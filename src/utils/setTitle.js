import React, { Component } from 'react';

export default (title) => (WrappedComponent) => class Title extends Component
{
	componentDidMount()
	{
		document.title = title;
	}

	render()
	{
		return <WrappedComponent { ...this.props } />
	}
}