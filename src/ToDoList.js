import React, { Component } from 'react';

class ToDoList extends Component {
	// const items = props.item;

	render() {
	 	return (
			<div>
				{this.props.item}
			</div>
		);
	 }
}

export default ToDoList;