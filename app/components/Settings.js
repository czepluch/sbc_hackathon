

import React from "react";

var page = require('../images/pages/page_settings.svg');

export default class Overview extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			balance: window.balance || 1870
		};
		window.socket.on('balance', function(balance) {
			console.log('new balance arrived', balance);
			this.setState({balance: balance});
		}.bind(this));
	}



	render() {
		return <div>
			<div className="clock money">&Xi; {this.state.balance}</div>
			<img className="page-img" src={page} alt="" />
		</div>;
	}
}
