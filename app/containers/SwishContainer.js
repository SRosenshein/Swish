import React from 'react';
import { Link } from 'react-router';
import { styles } from '../styles/courtpage';
// Import components
import CourtContainer from './CourtContainer';
import SearchContainer from './SearchContainer';

const SwishContainer = React.createClass({
	componentDidMount() {
		this.props
	},
	render() {
		return (
			<div className="col-sm-12 text-center">
				<h1>Main App Page</h1>
				<div className="col-sm-4" style={styles.left}>
					<SearchContainer {...this.props} />
				</div>
				<div className="col-sm-8" style={styles.right}>
					<CourtContainer {...this.props} />
				</div>
			</div>
		)
	}
});

export default SwishContainer;