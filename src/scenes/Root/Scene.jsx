import React from 'react';
import { Page, Router } from './styles';

import Header from '~/modules/Header';

import Main from '~/scenes/Main';
import News from '~/scenes/News';
import NewsItem from '~/scenes/News/NewsItem';
import Profile from '~/scenes/Profile';
import Auth from '~/scenes/Auth';
import NotFound from '~/scenes/NotFound';

export default () => (
	<Page>
		<Header />
		<Router>
			<Main path="/" />
			<News path="/news" />
			<NewsItem path="/news/:id" />
			<Profile path="/profile" />
			<Auth path="/auth" />
			<NotFound default />
		</Router>
	</Page>
)