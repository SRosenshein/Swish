import React from 'react';
import { render } from 'react-dom';

const HelloWorld = React.createClass({
	render() {
		return (
			<div> Hello! Dwellings </div>
		)
	}
});

render(
	<HelloWorld />, document.getElementById('app')
);