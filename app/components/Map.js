import React from 'react';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';
import canUseDOM from "can-use-dom";

const Map = React.createClass({
	handleMarkerClick(event) {
		console.log(event);
	},
	render() {
		const mapContainer = <div style={{height: '100%', width: '100%'}}></div>
		const center = {lat: 40.7829, lng: -73.9654};

		const MyGoogleMap = withGoogleMap(props => (
			<GoogleMap
				defaultZoom={15}
				defaultCenter={props.center}
				options={{streetViewControl: false, mapTypeControl: false}}>
				{props.markers.map(marker => (
					<Marker key={marker.id} {...marker} 
						onClick={props.onMarkerClick} 
						position={{lat: marker.latitude, lng: marker.longitude}} 
						defaultAnimation={2} /> 
				))}
			</GoogleMap>
		));

		return (
			<MyGoogleMap
				containerElement={ mapContainer }
				markers={this.props.state.courts}
				center={center}
				onMarkerClick={this.handleMarkerClick}
				mapElement={
         <div style={{ height: '100%' }} />
        } 
			/>
		)
	}
});

export default Map;