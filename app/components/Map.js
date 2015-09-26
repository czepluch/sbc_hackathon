

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
			defaultLayers.normal.traffic,
			{
				zoom: 10,
				center: { lat: 52.5, lng: 13.4 }
			});

        // Enable the event system on the map instance:
        var mapEvents = new H.mapevents.MapEvents(map);

        // Add event listener:
        map.addEventListener('tap', function(evt) {
            // Log 'tap' and 'mouse' events:
            console.log(evt.type, evt.currentPointer.type); 
        });

        // Instantiate the default behavior, providing the mapEvents object: 
        var behavior = new H.mapevents.Behavior(mapEvents);

        // Create a group that can hold map objects:
        group = new H.map.Group();

        // Add the group to the map object (created earlier):
        map.addObject(group);

        // Create a marker:
        marker = new H.map.Marker(map.getCenter());

        // Add the marker to the group (which causes 
        // it to be displayed on the map)
        group.addObject(marker);
	}



	render() {
		return <div className="map">
			<div id="map" ref="map"></div>
		</div>;
	}
}
