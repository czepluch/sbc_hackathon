
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

var _prefixZero = function(n) {
	n = "" + n;
	if (n.length === 1) {
		return "0" + n;
	}

	return n;
}

export default class Overview extends React.Component {

	startTimer() {
		var tick = function () {
			this.setState({ timer: this.state.timer + 1 });
		}.bind(this);

		tick();

		setInterval(function() {
			tick();
		}, 1000);
	}

	constructor(props) {
		super(props);

		this.state = {
			connected: false,
			src: alreadyCheckedIn ? activeTrip : notCheckedIn,
			timer: 0
		};

		if (alreadyCheckedIn) {
			console.log('starting timer');
			this.startTimer();
		}

		socket.on('found', function(data) {

			if (alreadyCheckedIn) {
				return;
			}

			var connected = data.length > 0;

			var src = connected ? checkedIn : notCheckedIn;

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
					this.startTimer();
				}.bind(this), 5000);
			}
			lastActive = true;

		}

		var overviewClass = "overview-container";

		if (alreadyCheckedIn) {
			overviewClass += " active";
		}

		var timer = null;
		var time = this.state.timer;

		if (time > 0) {
			var minutes = Math.floor(time / 60);
			var seconds = _prefixZero(time - minutes * 60);

			timer = (
				<div className="clock">
					<span>{minutes}:{seconds}</span>
				</div>
			);
		}

		return <div className={overviewClass}>
			{timer}
			<img className={className} src={this.state.src} alt="" />
		</div>;
	}
}
