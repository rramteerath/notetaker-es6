// es6
import React from 'react';
import SearchGithub from './SearchGithub';

// props passed into Main
// Use object destructuring to change props -> {history, children}
// So const Main = (props) => {...}
// becomes...
const Main = ({history, children}) => {
	return (
		<div className="main-container">
			<nav className="navbar navbar-default" role="navigation">
				<div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
					<SearchGithub history={history}/>
				</div>
			</nav>
		
			<div className="container">
				{children}
			</div>
		</div>
	)
}

// Main component gets history from the router.
// class Main extends React.Component {
// 	render() {
// 		return (
// 			<div className="main-container">
// 				<nav className="navbar navbar-default" role="navigation">
// 					<div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
// 						<SearchGithub history={this.props.history}/>
// 					</div>
// 				</nav>
			
// 				<div className="container">
// 					{this.props.children}
// 				</div>
// 			</div>
// 		)
// 	}
// }

export default Main;

// es5
// var React = require('react');
// var SearchGithub = require('./SearchGithub');

// var Main = React.createClass({
// 	render: function() {
// 		return (
// 			<div className="main-container">
// 				<nav className="navbar navbar-default" role="navigation">
// 					<div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
// 						<SearchGithub />
// 					</div>
// 				</nav>
			
// 				<div className="container">
// 					{this.props.children}
// 				</div>
// 			</div>
// 		)
// 	}
// });

// module.exports = Main;
