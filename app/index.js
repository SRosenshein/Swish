import React from 'react';
import { render } from 'react-dom';

//Import components
import Main from './components/Main';
import Home from './components/Home';

//Import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={Main}>
				<IndexRoute component={Home}></IndexRoute>
			</Route>
		</Router>
	</Provider>
)

render(router, document.getElementById('app'));