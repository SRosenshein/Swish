import React from 'react';
import { Link } from 'react-router';

const Court = React.createClass({ 
	render() {
		return (
			<div>
				{this.props.courts.currentCourt}
			</div>
		)
	}
})

export default Court;