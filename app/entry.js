import React from 'react';
import mainRoutes from './mainRoutes'
import Router from 'react-router';

React.render((
	<Router routes={mainRoutes} />
), document.getElementById('content'));
