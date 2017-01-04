import React from 'react';
import { Link } from 'react-router';
// Import components
import CourtContainer from './CourtContainer';

const SwishContainer = React.createClass({
	render() {
		return (
			//<Component 1 />
			//<Component 2 />
			//<Component 3 />
			<div>
				<div>Main App Page</div>
				<CourtContainer {...this.props}/>
			</div>
		)
	}
});

export default SwishContainer;