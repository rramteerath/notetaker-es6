import React from 'react';
// Object destructuring - same as 'const Repos = (props) => {...}'
const Repos = ({repos}) => {
	return (
		<div>
			<h3> User Repos </h3>
			<ul className="list-group">
				{repos.map((repo, index) => {
					return (
						<li className="list-group-item" key={index}>
							{repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
							{repo.description && <p>{repo.description}</p>}	
						</li>
					)
				})}
			</ul>
		</div>
	)
}

// Old way
// class Repos extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h3> User Repos </h3>
// 				<ul className="list-group">
// 					{this.props.repos.map((repo, index) => {
// 						return (
// 							<li className="list-group-item" key={index}>
// 								{repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
// 								{repo.description && <p>{repo.description}</p>}	
// 							</li>
// 						)
// 					})}
// 				</ul>
// 			</div>
// 		)
// 	}
// }

Repos.propTypes = {
	username: React.PropTypes.string.isRequired,
	repos: React.PropTypes.array.isRequired
}

export default Repos;

// es5
// var React = require('react');

// var Repos = React.createClass({
// 	// React proptypes adds type checking to react properties. If incorrect type
// 	// or nothing is passed in for a required param, will get errors in the console.
// 	propTypes: {
// 		username: React.PropTypes.string.isRequired,
// 		repos: React.PropTypes.array.isRequired
// 	},
// 	render: function() {
// 		var repos = this.props.repos.map(function(repo, index){
// 			return (
// 				<li className="list-group-item" key={index}>
// 					{repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
// 					{repo.description && <p>{repo.description}</p>}	
// 				</li>
// 			);
// 		});

// 		return (
// 			<div>
// 				<h3> User Repos </h3>
// 				<ul className="list-group">
// 					{repos}
// 				</ul>
// 			</div>
// 		)
// 	}
// });

// module.exports = Repos;
