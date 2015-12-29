// es5
// var React = require('react');
// var Main = require('../components/Main');
// var Home = require('../components/Home');
// var Profile = require('../components/Profile');
// var Router = require('react-router');
// var Route = Router.Route;
// var IndexRoute = Router.IndexRoute;

// es6
import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';
import { Route, IndexRoute } from 'react-router';

// es5
//module.exports = (

// es6
export default (
	<Route path="/" component={Main}>
		<Route path="profile/:username" component={Profile} />
		<IndexRoute component={Home} />
	</Route>
);
