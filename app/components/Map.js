

import React from "react";

var platform = new H.service.Platform({
  'app_id': 'r7ElBPghk3pWDgiRQV8j',
  'app_code': 'jdDUjr1MRWVtQKuvkg1NXw'
});

require('./map.styl');


export default class Map extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		};
	}


	componentDidMount() {
		// Obtain the default map types from the platform object:
		var defaultLayers = platform.createDefaultLayers();

		// Instantiate (and display) a map object:
		var map = new H.Map(
			React.findDOMNode(this.refs.map),
			defaultLayers.normal.map,
			{
				zoom: 10,
				center: { lat: 52.5, lng: 13.4 }
			});
	}



	render() {
		return <div className="map">
			<div id="map" ref="map"></div>
		</div>;
	}
}
