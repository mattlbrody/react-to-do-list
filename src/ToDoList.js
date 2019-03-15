import React, { Component } from 'react';

class ToDoList extends Component {

	render() {
	 	return (
			<div>
				<form onSubmit={this.props.addItem}>
		          <input 
		            placeholder="To Do"
		            ref={this.props.inputElement}
		            value={this.props.currentItem.text}
		            onChange={this.props.handleInput}
		          />
		          <button type="submit">Add Item</button>
		        </form>
			</div>
		);
	 }
}

export default ToDoList;