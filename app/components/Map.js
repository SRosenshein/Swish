import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

const Map = React.createClass({
	render() {
		const mapContainer = <div style={{height: '100%', width: '100%'}}></div>

		const markers = this.props.markers.map((court, i) => {
			const marker = {
				position: {
					lat: court.location.lat,
					lng: court.location.lng
				}
			}

			return <Marker key={i} {...marker} />
 		})

		return (
			<GoogleMapLoader
				containerElement={ mapContainer }
				googleMapElement={
					<GoogleMap
						defaultZoom={15}
						defaultCenter={this.props.center}
						options={{streetViewControl: false, mapTypeControl: false}}>
						{ markers }
					</GoogleMap>
				} />
		)
	}
});

Map.propTypes = {
	center: React.PropTypes.object,
	markers: React.PropTypes.array
}

export default Map;