import React from 'react';
import { Container, Loader } from './styles';

export default ({ loading, children }) => (
	<Container>
		{ loading ? <Loader /> : children }
	</Container>
);