

import React from "react";

var page = require('../images/pages/page_settings.svg');


export default class Overview extends React.Component {

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
