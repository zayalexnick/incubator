import React, { Component } from 'react';
import ResponsiveContainer from '~/components/ResponsiveContainer';
import setTitle from '~/utils/setTitle';

@setTitle('Ничего не найдено')
export default class extends Component
{
	render()
	{
		return (
			<ResponsiveContainer flex center>
				<h1>Ничего не найдено</h1>
			</ResponsiveContainer>
		)
	}
}
