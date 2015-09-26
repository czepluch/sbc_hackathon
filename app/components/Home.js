
import React from "react";
import io from 'socket.io-client';


require('./style.styl');

var socket = io("localhost:3001");

socket.on('connect', function(conn) {
	console.log('connected ;)');
});




export default class Home extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			connected: false
		};

		socket.on('found', function(data) {
			if (data.length > 0) {
				this.setState({ connected: true });
			}
		}.bind(this));
	}



	render() {
		var name = 'dot';
		if (this.state.connected) {
			name += ' active';
		}
		return <div>
			<h1>Home</h1>
			<div className={name}></div>
		</div>;
	}
}
