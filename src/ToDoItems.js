import './todolist.css';
import React, { Component } from 'react';

class ToDoItems extends Component {
	
	// creates each list item
	createTasks = (item) => {
		return (
			<li key={item.key} >
				<input type="checkbox" onChange={() => this.props.strikeItem(item)}/>
				{item.text}
			</li>
		)
	}

	render() {
		//save the list of items and create a li for each one
		const listOfItems = this.props.listOfItems;
		const displayItems = listOfItems.map(this.createTasks);

		//display the list of li's
		return <ul>{displayItems}</ul>
	}
}

export default ToDoItems;