
import React from "react";
import io from 'socket.io-client';


var checkedIn = require('../images/pages/page_checkedin.svg');
var notCheckedIn = require('../images/pages/page_notcheckedin.svg');

var socket = io("localhost:3001");

socket.on('connect', function(conn) {
	console.log('connected ;)');
});




export default class Overview extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			connected: []
		};

		socket.on('found', function(data) {
			this.setState({ connected: data });
		}.bind(this));
	}



	render() {
		var src = notCheckedIn;

		if (this.state.connected.length > 0) {
		//if (true) {
			src = checkedIn;
		}

		return <div>
			<img className="page-img" src={src} alt="" />
		</div>;
	}
}
