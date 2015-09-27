
import React from "react";
import io from 'socket.io-client';


var checkedIn = require('../images/pages/page_checkedin.svg');
var notCheckedIn = require('../images/pages/page_notcheckedin.svg');
var finishedPage = require('../images/pages/page_finishedtrip.svg');
var activeTrip = require('../images/pages/page_live-overview.svg');
var Map = require('./Map');

var socket = io("localhost:3001");
window.socket = socket;

socket.on('connect', function(conn) {
	console.log('connected ;)');
});


var lastActive = false;
var alreadyCheckedIn = false;
var timeoutSet = false;

var _prefixZero = function(n) {
	n = "" + n;
	if (n.length === 1) {
		return "0" + n;
	}

	return n;
}


var timerValue = 0;

export default class Overview extends React.Component {

	startTimer() {
		var tick = function () {
			this.setState({ timer: this.state.timer + 1 });
			timerValue = this.state.timer;
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
			timer: timerValue,
			endView: false,
			viewTimer: true
		};

		if (alreadyCheckedIn) {
			console.log('starting timer');
			this.startTimer();
		}

		socket.on('found', function(data) {

			if (this.state.endView || this.state.connected) {
				return;
			}

			var connected = data.length > 0;

			var src = connected ? checkedIn : notCheckedIn;

			if (connected) {
				alreadyCheckedIn = true;
				setTimeout(function() {
				
					this.setState({src: finishedPage, connected: false, endView: true, viewTimer: false});
					socket.emit('transaction', {});
					console.log('emitting transaction');
					window.balance = 870;
				}.bind(this), 20000);
			}
	
			this.setState({src: src, connected: connected});
		}.bind(this));

	}



	render() {

		var className = "page-img overview";
		if (this.state.connected === true) {
		// if (true) {
			className += " active";
			if (lastActive === false && !timeoutSet) {
				setTimeout(function() {
					alreadyCheckedIn = true;
					this.setState({src: activeTrip, connected: true});
					this.startTimer();
				}.bind(this), 3000);
				timeoutSet = true;
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
			{this.state.viewTimer ? timer : null}
			<img className={className} src={this.state.src} alt="" />
			{this.state.endView ? <Map /> : null}
		</div>;
	}
}
