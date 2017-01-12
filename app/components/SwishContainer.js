import React, {Component} from 'react';
import { Link } from 'react-router';
import { styles } from '../styles/courtpage';
// Import components
import Search from './Search';
import Map from './Map';

const SwishContainer = React.createClass({
	render() {
		return (
			<div className="row text-center">
				<h1>Main App Page</h1>
				<div className="col-lg-8" style={styles.mapContainer}>
					<Map {...this.props} />
				</div>
				<div className="col-lg-4" >
					<Search {...this.props} />
				</div>
			</div>
		)
	}
});

export default SwishContainer;