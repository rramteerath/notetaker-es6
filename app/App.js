// es5
// var React = require('react');
// var ReactDOM = require('react-dom');
// var Router = require('react-router').Router;
// var routes = require('./config/routes');

// es6
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import routes from './config/routes';

ReactDOM.render(
	<Router>{routes}</Router>,
	document.getElementById('app')
)
