// es6
import React from 'react';

class Home extends React.Component {
	render() {
		return(
			<h2 className="text-center">
				Search By Github Username Above
			</h2>
		)
	}
}

export default Home;

// es5
// var React = require('react');

// var Home = React.createClass({
// 	render: function() {
// 		return(
// 			<h2 className="text-center">
// 				Search By Github Username Above
// 			</h2>
// 		)
// 	}
// });

// module.exports = Home;
