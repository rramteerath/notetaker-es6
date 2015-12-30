import React from'react';
import NotesList from './NotesList';
import AddNote from './AddNote';

const Notes = ({username, notes, addNote}) => {
	return (
		<div>
			<h3>Notes for {username}</h3>
			<AddNote username={username} addNote={addNote} />
			<NotesList notes={notes} />
		</div>
	)
}

// Old way
// class Notes extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h3>Notes for {this.props.username}</h3>
// 				<AddNote username={this.props.username} addNote={this.props.addNote} />
// 				<NotesList notes={this.props.notes} />
// 			</div>
// 		)	
// 	}
// }

Notes.propTypes = {
	username: React.PropTypes.string.isRequired,
	notes: React.PropTypes.array.isRequired,
	addNote: React.PropTypes.func.isRequired
}

export default Notes;

// es5
// var Notes = React.createClass({
// 	propTypes: {
// 		username: React.PropTypes.string.isRequired,
// 		notes: React.PropTypes.array.isRequired,
// 		addNote: React.PropTypes.func.isRequired
// 	},
// 	render: function() {
// 		return (
// 			<div>
// 				<h3>Notes for {this.props.username}</h3>
// 				<AddNote username={this.props.username} addNote={this.props.addNote} />
// 				<NotesList notes={this.props.notes} />
// 			</div>
// 		)
// 	}
// });

// module.exports = Notes;
