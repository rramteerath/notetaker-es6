import React from 'react';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import getGithubInfo from '../utils/helper';
import Rebase from 're-base';

const base = Rebase.createClass('https://rrnotetaker.firebaseio.com');

class Profile extends React.Component {
	// With es6, the getInitialState is replaced by the constructor.
	constructor(props) {
		super(props);

		this.state = {
			notes: [],
			bio: {},
			repos: []
		}
	}

	// getInitialState() {
	// 	return {
	// 		notes: [],
	// 		bio: {},
	// 		repos: []
	// 	}
	// }

	// componentDidMount lifecycle event called after the component mounts the view
	componentDidMount() {
		this.init(this.props.params.username);
	}

	componentWillReceiveProps(nextProps) {
		console.log("nextProps", nextProps);
		base.removeBinding(this.ref);
		this.init(nextProps.params.username);
	}

	componentWillUnmount() {
		base.removeBinding(this.ref);
	}

	init(username) {
		this.ref = base.bindToState(this.props.params.username, {
			context: this,
			asArray: true,
			state: 'notes'
		});

		console.log("notes", this.state.notes);

		// Call the helper function to get the promise returned from github apis
		// to populate the bio and repos.
		// getGithubInfo(username)
		// 	.then(function(data) {
		// 		console.log("data", data);

		// 		this.setState({			// there is no setState on the 'this' within the function
		// 			bio: data.bio,		// need to set 'this' to point to the reference outside of this function
		// 			repos: data.repos   // using the .bind below
		// 		})
		// 	}.bind(this))	// change the context of 'this' to point to the outer reference of 'this'

		getGithubInfo(username)
			.then((data) => 
				this.setState({
					bio: data.bio,
					repos: data.repos
				})
			)
	}

	// Create handler to add new note. This will be passed down to the Notes component.
	handleAddNote(newNote) {
		base.post(this.props.params.username, {
			data: this.state.notes.concat([newNote])
		});
	}

	render() {
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
						addNote={(newNote) => this.handleAddNote(newNote)} />
				</div>
			</div>
		)
	}
}

export default Profile;

// es5
// var Profile = React.createClass({
// 	mixins: [ReactFireMixin],

// 	getInitialState: function() {
// 		return {
// 			notes: [],
// 			bio: {},
// 			repos: []
// 		}
// 	},

// 	// componentDidMount lifecycle event
// 	// called after the component mounts the view
// 	componentDidMount: function() {
// 		this.ref = new Firebase('https://rrnotetaker.firebaseio.com');
// 		this.init(this.props.params.username);
// 	},

// 	componentWillReceiveProps: function(nextProps) {
// 		//console.log("nextProps", nextProps);
// 		this.unbind('notes');
// 		this.init(nextProps.params.username);
// 	},

// 	componentWillUnmount: function() {
// 		this.unbind('notes');
// 	},

// 	init: function(username) {
// 		var childRef = this.ref.child(username);
// 		this.bindAsArray(childRef, 'notes');

// 		// Call the helper function to get the promise returned from github apis
// 		// to populate the bio and repos.
// 		getGithubInfo(username)
// 			.then(function(data) {
// 				this.setState({			// there is no setState on the 'this' within the function
// 					bio: data.bio,		// need to set 'this' to point to the reference outside of this function
// 					repos: data.repos   // using the .bind below
// 				})
// 			}.bind(this))	// change the context of 'this' to point to the outer reference of 'this'
// 	},

// 	// Create handler to add new note. This will be passed down to the Notes component.
// 	handleAddNote: function(newNote) {
// 		this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote)
// 	},

// 	render: function() {
// 		return (
// 			<div className="row">
// 				<div className="col-md-4">
// 					<UserProfile username={this.props.params.username} bio={this.state.bio} />
// 				</div>
// 				<div className="col-md-4">
// 					<Repos username={this.props.params.username} repos={this.state.repos} />
// 				</div>
// 				<div className="col-md-4">
// 					<Notes 
// 						username={this.props.params.username} 
// 						notes={this.state.notes} 
// 						addNote={this.handleAddNote} />
// 				</div>
// 			</div>
// 		)
// 	}
// });

// module.exports = Profile;
