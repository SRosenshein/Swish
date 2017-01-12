import React from 'react';
import { GoogleMap, Marker, withGoogleMap, InfoWindow } from 'react-google-maps';

const Map = React.createClass({
	handleMarkerClick(targetMarker) {
		this.props.courtRequest(targetMarker.id);
	},
	handleMarkerClose(targetMarker) {
		targetMarker.showInfo = false;
		return targetMarker;
	},
	render() {
		const mapContainer = <div style={{height: '100%', width: '100%'}}></div>
		const center = {lat: 40.7829, lng: -73.9654};
		const image = {
			url: require('../utils/bballPic.png'),
			scaledSize: new google.maps.Size(24, 24)
		};
		console.log(this.props.courts);

		const SwishGoogleMap = withGoogleMap(props => (
			<GoogleMap
				defaultZoom={15}
				defaultCenter={props.center}
				options={{streetViewControl: false, mapTypeControl: false}}
				{...this.props}>
				{props.markers.map(marker => (
					<Marker key={marker.id} {...marker} 
						onClick={() => marker = props.onMarkerClick(marker)} 
						position={{lat: marker.latitude, lng: marker.longitude}} 
						defaultAnimation={2}
						title={marker.name}
						icon={image} 
						{...this.props}
					>
						{(this.props.courts.currentCourt === marker.id) && (
							<InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
								<div>
									{marker.name}<br/>
									Status: {marker.address}
								</div>
							</InfoWindow>
						)}	
					</Marker> 
				))}
			</GoogleMap>
		));

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