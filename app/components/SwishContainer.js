import React, {Component} from 'react';
import { Link } from 'react-router';
import { styles } from '../styles/courtpage';
// Import components
import Search from './Search';
import Map from './Map';

const SwishContainer = React.createClass({
	render() {
		return (
			<div className="col-sm-12 text-center">
				<h1>Main App Page</h1>
				<div className="mapContainer" style={styles.mapContainer}>
					<Map {...this.props} />
				</div>
				<Search {...this.props} />
			</div>
		)
	}
});

export default SwishContainer;