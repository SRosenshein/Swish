import React, { Component } from 'react';
import { Link } from 'react-router';

class Court extends Component { 
	render() {
		return (
			<div>
				{this.props.courts.currentCourt}
			</div>
		);
	}
}

export default Court;