
import React from "react";


var page = require('../images/pages/page_estimator.svg');

export default class Overview extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		};
	}



	render() {
		return <div>
			<img src={page} alt="" className="page-img"/>
		</div>;
	}
}
