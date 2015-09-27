

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

        // Create the parameters for the routing request:
        var routingParametersPublic = {
          // The routing mode:
          'mode': 'fastest;publicTransport',
          // The start point of the route:
          'waypoint0': 'geo!52.503861,13.331128',
          // The end point of the route:
          'waypoint1': 'geo!52.51366,13.47506',
          // To retrieve the shape of the route we choose the route
          // representation mode 'display'
          'representation': 'display'
        };
        // Create the parameters for the routing request:
        var routingParametersCar = {
          // The routing mode:
          'mode': 'fastest;car',
          // The start point of the route:
          'waypoint0': 'geo!52.503861,13.331128',
          // The end point of the route:
          'waypoint1': 'geo!52.51366,13.47506',
          // To retrieve the shape of the route we choose the route
          // representation mode 'display'
          'representation': 'display'
        };

        // Define a callback function to process the routing response:
        var onPublicResult = function(result) {
          var route,
              routeShape,
              startPoint,
              endPoint,
              strip;
          if(result.response.route) {
            // Pick the first route from the response:
            route = result.response.route[0];
            // Pick the route's shape:
            routeShape = route.shape;

            // Create a strip to use as a point source for the route line
            strip = new H.geo.Strip();

            // Push all the points in the shape into the strip:
            routeShape.forEach(function(point) {
              var parts = point.split(',');
              strip.pushLatLngAlt(parts[0], parts[1]);
            });

            // Retrieve the mapped positions of the requested waypoints:
            startPoint = route.waypoint[0].mappedPosition;
            endPoint = route.waypoint[1].mappedPosition;

            // Create a polyline to display the route:
            var routeLine = new H.map.Polyline(strip, {
              style: { strokeColor: 'rgba(44, 219, 44, 0.7)', lineWidth: 5 }
            });

            // Create a marker for the start point:
            var startMarker = new H.map.Marker({
              lat: startPoint.latitude,
              lng: startPoint.longitude
            });

            // Create a marker for the end point:
            var endMarker = new H.map.Marker({
              lat: endPoint.latitude,
              lng: endPoint.longitude
            });

            // Add the route polyline and the two markers to the map:
            map.addObjects([routeLine, startMarker, endMarker]);

            // Set the map's viewport to make the whole route visible:
            map.setViewBounds(routeLine.getBounds());
          }
        };
        // Define a callback function to process the routing response:
        var onCarResult = function(result) {
          var route,
              routeShape,
              startPoint,
              endPoint,
              strip;
          if(result.response.route) {
            // Pick the first route from the response:
            route = result.response.route[0];
            // Pick the route's shape:
            routeShape = route.shape;

            // Create a strip to use as a point source for the route line
            strip = new H.geo.Strip();

            // Push all the points in the shape into the strip:
            routeShape.forEach(function(point) {
              var parts = point.split(',');
              strip.pushLatLngAlt(parts[0], parts[1]);
            });

            // Retrieve the mapped positions of the requested waypoints:
            startPoint = route.waypoint[0].mappedPosition;
            endPoint = route.waypoint[1].mappedPosition;

            // Create a polyline to display the route:
            var routeLine = new H.map.Polyline(strip, {
              style: { strokeColor: 'rgba(225, 54, 44, 0.7)', lineWidth: 5 }
            });

            // Create a marker for the start point:
            var startMarker = new H.map.Marker({
              lat: startPoint.latitude,
              lng: startPoint.longitude
            });

            // Create a marker for the end point:
            var endMarker = new H.map.Marker({
              lat: endPoint.latitude,
              lng: endPoint.longitude
            });

            // Add the route polyline and the two markers to the map:
            map.addObjects([routeLine, startMarker, endMarker]);

            // Set the map's viewport to make the whole route visible:
            map.setViewBounds(routeLine.getBounds());
          }
        };

        // Get an instance of the routing service:
        var routerCar = platform.getRoutingService();
        var routerPublic = platform.getRoutingService();

        // Call calculateRoute() with the routing parameters,
        // the callback and an error callback function (called if a
        // communication error occurs):
        routerCar.calculateRoute(routingParametersCar, onCarResult,
            function(error) {
                alert(error.message);
        });
        // Call calculateRoute() with the routing parameters,
        // the callback and an error callback function (called if a
        // communication error occurs):
        routerPublic.calculateRoute(routingParametersPublic, onPublicResult,
            function(error) {
                alert(error.message);
        });

	}



	render() {
		return <div className="map">
			<div id="map" ref="map"></div>
		</div>;
	}
}
