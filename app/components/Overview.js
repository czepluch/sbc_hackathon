
import React from "react";
import io from 'socket.io-client';


var checkedIn = require('../images/pages/page_checkedin.svg');
var notCheckedIn = require('../images/pages/page_notcheckedin.svg');
var activeTrip = require('../images/pages/page_live-overview.svg');

var socket = io("localhost:3001");

socket.on('connect', function(conn) {
	console.log('connected ;)');
});


var lastActive = false;
var alreadyCheckedIn = false;

export default class Overview extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			connected: false,
			src: alreadyCheckedIn ? activeTrip : notCheckedIn
		};

		socket.on('found', function(data) {

			if (alreadyCheckedIn) {
				return;
			}

			var connected = data.length > 0;

			var src = connected ? checkedIn : notCheckedIn;
			console.log('found', data, connected);
			if (connected) {
				alreadyCheckedIn = true;
			}
	
			this.setState({src: src, connected: connected});
		}.bind(this));
	}



	render() {

		var className = "page-img overview";
		if (this.state.connected === true) {
		// if (true) {
			className += " active";
			if (lastActive === false) {
				setTimeout(function() {
					alreadyCheckedIn = true;
					this.setState({src: activeTrip});
				}.bind(this), 5000);
			}
			lastActive = true;

		}

		var overviewClass = "overview-container";

		if (alreadyCheckedIn) {
			overviewClass += " active";
		}

		return <div className={overviewClass}>
			<img className={className} src={this.state.src} alt="" />
		</div>;
	}
}
