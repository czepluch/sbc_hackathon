

import React from "react";


var page = require('../images/pages/page_travelhistory.svg');

export default class History extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		};
	}



	render() {
		return <div>
			<img className="page-img" src={page} alt="" />
		</div>;
	}
}
