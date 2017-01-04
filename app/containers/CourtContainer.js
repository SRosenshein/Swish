import React from 'react';
// Import components
import Court from '../components/Court';

const CourtContainer = React.createClass({
	render() {
		return (
			//<Component 1 />
			//<Component 2 />
			//<Component 3 />
			//<Component 4 />
			<Court {...this.props} />
		)
	}
});

export default CourtContainer;