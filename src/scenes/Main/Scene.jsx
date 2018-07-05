import React, { Component } from 'react';
import ResponsiveContainer from '~/components/ResponsiveContainer';
import setTitle from '~/utils/setTitle';

@setTitle('Добро пожаловать')
export default class extends Component
{
	render()
	{
		return (
			<ResponsiveContainer flex center>
				<h1>Добро пожаловать</h1>
			</ResponsiveContainer>
		)
	}
}
