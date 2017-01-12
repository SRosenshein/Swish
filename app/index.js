import React from 'react';
import { render } from 'react-dom';

//Import components
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import SwishContainer from './components/SwishContainer';
import Court from './components/Court';

//Import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Home}></IndexRoute>
				<Route path="about" component={About} />
				<Route path="swish" component={SwishContainer} />
				<Route path="/view/:courtId" component={Court} />
			</Route>
		</Router>
	</Provider>
)

render(router, document.getElementById('app'));