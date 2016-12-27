import React from 'react';
import { render } from 'react-dom';

//Import components
import Main from './components/Main';
import Home from './components/Home';

//Import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


const router = (
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Home}></IndexRoute>
		</Route>
	</Router>
)

render(router, document.getElementById('app'));