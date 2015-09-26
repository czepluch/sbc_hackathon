import React from "react";
import { Route, IndexRoute } from "react-router";

/* eslint-disable no-multi-spaces */
// Only import from `route-handlers/*`
import App from "components/App"
import Overview from "components/Overview"
import Estimator from "components/Estimator"
import History from "components/History"
import Settings from "components/Settings"
import Map from "components/Map"
/* eslint-enable */

// polyfill
if(!Object.assign)
	Object.assign = React.__spread; // eslint-disable-line no-underscore-dangle

// export routes
module.exports = (
	<Route name="app" path="/" component={App}>
		<IndexRoute name="overview" component={Overview} />
		<Route name="estimator" path="/estimator" component={Estimator} />
		<Route name="history" path="/history" component={History} />
		<Route name="settings" path="/settings" component={Settings} />
		<Route name="map" path="/map" component={Map} />
	</Route>
);
