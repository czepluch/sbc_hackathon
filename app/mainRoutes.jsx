import React from "react";
import { Route, IndexRoute } from "react-router";

/* eslint-disable no-multi-spaces */
// Only import from `route-handlers/*`
import App from "components/App"
import Home from "components/Home"
/* eslint-enable */

// polyfill
if(!Object.assign)
	Object.assign = React.__spread; // eslint-disable-line no-underscore-dangle

// export routes
module.exports = (
	<Route name="app" path="/" component={App}>
		<IndexRoute component={Home} />
	</Route>
);
