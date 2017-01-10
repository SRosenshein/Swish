import React, {Component} from 'react';
import { GoogleMapLoader, GoogleMap, Marker, withGoogleMap } from 'react-google-maps';

class Map extends Component {
	render() {
		const mapContainer = <div style={{height: '100%', width: '100%'}}></div>

		// const markers = this.props.state.courts.map((court, i) => {
		// 	const marker = {
		// 		position: {
		// 			lat: court.latitude,
		// 			lng: court.longitude
		// 		}
		// 	}
		// 	return <Marker key={court.id} {...marker} />
		// });

		const MyGoogleMap = withGoogleMap(props => (
			<GoogleMap
				defaultZoom={15}
				defaultCenter={{lat: 40.7829, lng: -73.9654}}
				options={{streetViewControl: false, mapTypeControl: false}}>
				{props.markers.map(marker => (
					<Marker key={marker.id} {...marker} position={{lat: marker.latitude, lng: marker.longitude}} defaultAnimation={2}/> 
				))}
			</GoogleMap>
		));

		// const markers = {
		// 	position: {
		// 		lat: 40.7829,
		// 		lng: -73.9654
		// 	}
		// };

		return (
			<MyGoogleMap
				containerElement={ mapContainer }
				markers={this.props.state.courts}
				mapElement={
         <div style={{ height: '100%' }} />
         }
				// googleMapElement={
				// 	<GoogleMap
				// 		defaultZoom={15}
				// 		defaultCenter={{lat: 40.7829, lng: -73.9654}}
				// 		options={{streetViewControl: false, mapTypeControl: false}}>
				// 		{markers}
				// 	</GoogleMap>
				// } 
			/>
		)
	}
}

export default Map;