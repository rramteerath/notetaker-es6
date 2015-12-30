// es6
import React from 'react';

const NotesList = ({notes}) => {
	return (
		<ul className="list-group">
			{notes.map((note, index) => (
				<li className="list-group-item" key={index}>{note}</li>
			))}
		</ul>
	)
}


// class NotesList extends React.Component {
// 	render() {
// 		const { notes } = this.props;

// 		return (
// 			<ul className="list-group">
// 				{notes.map((note, index) => (
// 					<li className="list-group-item" key={index}>{note}</li>
// 				))}
// 			</ul>
// 		)
// 	}
// }

export default NotesList;

// es5
// var React = require('react');

// var NotesList = React.createClass({
// 	render: function() {
// 		var notes = this.props.notes.map(function(note, index){
// 			return <li className="list-group-item" key={index}>{note['.value']}</li>
// 		})

// 		return (
// 			<ul className="list-group">
// 				{notes}
// 			</ul>
// 		)
// 	}
// });

// module.exports = NotesList;
