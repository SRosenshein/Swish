import React from 'react';
import { GoogleMap, Marker, withGoogleMap, InfoWindow } from 'react-google-maps';
import { Link } from 'react-router';
import css from '../styles/style.css';
import Spinner from 'react-spinkit';

const Map = React.createClass({
	componentWillMount() {
		this.props.fetchAllCourts();
	},
	handleMarkerClick(targetMarker) {
		this.props.courtRequest(targetMarker.id);
	},
	handleMarkerClose(targetMarker) {
	
	},
	render() {
		const mapContainer = <div style={{height: '100%', width: '100%'}}></div>
		const center = {lat: 40.7829, lng: -73.9654};
		const image = {
			url: require('../utils/img/bballPic.png'),
			scaledSize: new google.maps.Size(20, 20)
		};

		const SwishGoogleMap = withGoogleMap(props => (
			<GoogleMap
				defaultZoom={15}
				defaultCenter={props.center}
				options={{streetViewControl: false, mapTypeControl: false}}
				{...this.props}>
				{props.markers.map(marker => (
					<Marker key={marker.id} {...marker} 
						onClick={() => props.onMarkerClick(marker)} 
						position={{lat: parseFloat(marker.latitude), lng: parseFloat(marker.longitude)}} 
						defaultAnimation={2}
						title={marker.name}
						icon={image} 
						{...this.props}
					>
						{this.props.courts.currentCourt === marker.id && (
							<InfoWindow 
								onCloseClick={() => props.onMarkerClose(marker)}
							>
								<div>
									<Link to={`/view/${marker.id}`}>
										{marker.name}<br/>
									</Link>
									Status: {marker.status}
								</div>
							</InfoWindow>
						)}
					</Marker> 
				))}
			</GoogleMap>
		));

		if (this.props.courts.courts.length < 1) {
			return <Spinner spinnerName="wandering-cubes" />;
		}

		return (
			<SwishGoogleMap
				containerElement={ mapContainer }
				markers={this.props.courts.courts}
				center={center}
				onMarkerClick={this.handleMarkerClick}
				onMarkerClose={this.handleMarkerClose}
				mapElement={
         <div style={{ height: '100%' }} />
        }
        {...this.props} 
			/>
		)
	}
});

export default Map;