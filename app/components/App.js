
import React from "react";
import { Link } from 'react-router';


require('./style.styl');
require('../fonts/font.css');


var overview = require('../images/live-overview.svg');
var estimator = require('../images/estimate.svg');
var history = require('../images/travel_overview.svg');
var settings = require('../images/settings.svg');

export default class Application extends React.Component {
	render() {
		return (
		<div>
			<div className="content">
				{this.props.children}
			</div>
			<div className="menu">
				<ul>
					<li>
						<Link to="/">
							<div className="icon-wrapper">
								<img src={overview} alt="" />
							</div>
							<span>Live Overview</span>
						</Link>
					</li>
					<li>
						<Link to="/estimator">
							<div className="icon-wrapper">
								<img src={estimator} alt="" />
							</div>
							<span>Estimator</span>
						</Link>
					</li>
					<li>
						<Link to="/history">
							<div className="icon-wrapper">
								<img src={history} alt="" />
							</div>
							<span>Travel History</span>
						</Link>
					</li>
					<li>
						<Link to="/settings">
							<div className="icon-wrapper">
								<img src={settings} alt="" />
							</div>
							<span>Settings</span>
						</Link>
					</li>
				</ul>
			</div>
		</div>
		)
	}
}
