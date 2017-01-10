import React from 'react';
import { Link } from 'react-router';
import { styles } from '../styles/courtpage';
// Import components
import Search from './Search';
import Map from './Map';

const SwishContainer = React.createClass({
	componentDidMount() {
		this.props.fetchAllCourts();
	},
	render() {
		const center = {
			lat: 40.7829,
			lng: -73.9654
		};

		const markers = [
			{
				location: {
					lat: 40.7829,
					lng: -73.9654
				}
			}
		]

		return (
			<div className="col-sm-12 text-center">
				<h1>Main App Page</h1>
				<div className="mapContainer" style={styles.mapContainer}>
					<Map center={center} markers={markers} {...this.props} />
				</div>
				<Search {...this.props} />
			</div>
		)
	}
});

export default SwishContainer;