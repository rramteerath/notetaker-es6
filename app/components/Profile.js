var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
var Notes = require('./Notes/Notes');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

// es5
//var helpers = require('../utils/helper');

// es6
import getGithubInfo from '../utils/helper';

var Profile = React.createClass({
	mixins: [ReactFireMixin],

	getInitialState: function() {
		return {
			notes: [],
			bio: {},
			repos: []
		}
	},

	// componentDidMount lifecycle event
	// called after the component mounts the view
	componentDidMount: function() {
		this.ref = new Firebase('https://rrnotetaker.firebaseio.com');
		this.init(this.props.params.username);
	},

	componentWillReceiveProps: function(nextProps) {
		//console.log("nextProps", nextProps);
		this.unbind('notes');
		this.init(nextProps.params.username);
	},

	componentWillUnmount: function() {
		this.unbind('notes');
	},

	init: function(username) {
		var childRef = this.ref.child(username);
		this.bindAsArray(childRef, 'notes');

		// Call the helper function to get the promise returned from github apis
		// to populate the bio and repos.
		getGithubInfo(username)
			.then(function(data) {
				this.setState({			// there is no setState on the 'this' within the function
					bio: data.bio,		// need to set 'this' to point to the reference outside of this function
					repos: data.repos   // using the .bind below
				})
			}.bind(this))	// change the context of 'this' to point to the outer reference of 'this'
	},

	// Create handler to add new note. This will be passed down to the Notes component.
	handleAddNote: function(newNote) {
		this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote)
	},

	render: function() {
		return (
			<div className="row">
				<div className="col-md-4">
					<UserProfile username={this.props.params.username} bio={this.state.bio} />
				</div>
				<div className="col-md-4">
					<Repos username={this.props.params.username} repos={this.state.repos} />
				</div>
				<div className="col-md-4">
					<Notes 
						username={this.props.params.username} 
						notes={this.state.notes} 
						addNote={this.handleAddNote} />
				</div>
			</div>
		)
	}
});

module.exports = Profile;
