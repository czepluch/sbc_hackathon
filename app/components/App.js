
import React from "react";
import { Link } from 'react-router';

export default class Application extends React.Component {
	render() {
		return <div>
		<div className="content">
			{this.props.children}
		</div>
		<div className="menu"></div>
		
		</div>
	}
}
