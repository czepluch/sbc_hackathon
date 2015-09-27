

import React from "react";
import request from 'superagent';
var traffic = require('./traffic.json');

var platform = new H.service.Platform({
  'app_id': 'r7ElBPghk3pWDgiRQV8j',
  'app_code': 'jdDUjr1MRWVtQKuvkg1NXw'
});

var bbox = [[52.564873, 13.347359], [52.482571, 13.488121]];

var apiUrl = "https://traffic.cit.api.here.com/traffic/6.0/incidents.json?bbox=52.564873%2C%2013.347359%3B52.482571%2C%2013.488121&criticality=0&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg";

var map = null;

require('./map.styl');

function requestIncidents(scb, ecb, scope){
  var trafficService = platform.getTrafficIncidentsService(),
    parameters = {
      bbox: '52.564873, 13.347359;52.482571, 13.488121',
      criticality: '0'};

  trafficService.requestIncidents(parameters,
    function (result) {
			scb.call(scope, result);
    }, function (error) {
			ecb.call(scope, result);
    });
}

function distance(lat1, lon1, lat2, lon2, unit) {
	var radlat1 = Math.PI * lat1/180
	var radlat2 = Math.PI * lat2/180
	var radlon1 = Math.PI * lon1/180
	var radlon2 = Math.PI * lon2/180
	var theta = lon1-lon2
	var radtheta = Math.PI * theta/180
	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	dist = Math.acos(dist)
	dist = dist * 180/Math.PI
	dist = dist * 60 * 1.1515
	if (unit=="K") { dist = dist * 1.609344 }
	if (unit=="N") { dist = dist * 0.8684 }
	return dist
}

function eucledianCenter(x1, x2, y1, y2) {
	var x = (x1 + y1) / 2;
	var y = (x2 + y2) / 2;
	return [x, y];
}

export default class Map extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			traffic: []
		};


	}


	handleTraffic(traffic) {
		var tr = traffic.TRAFFICITEMS.TRAFFICITEM;
		tr = tr.map(function(item) {
			var loc = item.LOCATION.GEOLOC;
			var origin = loc.ORIGIN;
			var to = loc.TO[0];


			var res = {
				critical: parseInt(item.CRITICALITY.ID, 10),
				center: eucledianCenter(origin.LATITUDE, origin.LONGITUDE, to.LATITUDE, to.LONGITUDE),
				radius: distance(origin.LATITUDE, origin.LONGITUDE, to.LATITUDE, to.LONGITUDE, "K") / 2
			};

			return res;


		});
		return tr;
	}


	componentDidMount() {
		// Obtain the default map types from the platform object:
		var defaultLayers = platform.createDefaultLayers();

		var trafficData = this.handleTraffic(traffic);
		

//		requestIncidents(this.handleTraffic.bind(this), function fail(err) {
	//											console.log('error');
	//										}, this);

		// Instantiate (and display) a map object:
		map = new H.Map(
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

		
		// TRAFFIC

		console.log('ttr', trafficData);


		var colors = [
			"rgba(0, 150, 136, 0.2)",
			"rgba(174, 213, 129, 0.2)",
			"rgba(0, 145, 234, 0.2)",
			"rgba(251, 173, 51, 0.2)"
		];
		trafficData.forEach(function(date) {
			var args = [
				{lat: date.center[0], lng: date.center[1]},
				date.radius * 1000,
				{
					style: {
						fillColor: colors[date.critical],
						lineWidth: 2,
						strokeColor: colors[date.critical]
					}
				}
			];
			map.addObject(new H.map.Circle(
				{lat: date.center[0], lng: date.center[1]},
				date.radius * 2000,
				{
					style: {
						fillColor: colors[date.critical],
						lineWidth: 0,
						strokeColor: colors[date.critical]
					}
				}
			));	
		});

	}



	render() {
		return <div className="map">
			<div id="map" ref="map"></div>
		</div>;
	}
}
