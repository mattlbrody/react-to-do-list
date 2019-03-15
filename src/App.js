import React, { Component } from 'react';
import ToDoList from './ToDoList';
import ToDoItems from './ToDoItems';

class App extends Component {
  state = { items: [], currentItem: {text:'', key:'' }}

  // passes the input and a unique key into the currentItem state
  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    this.setState({ currentItem });
  }

  // Create the new item in the to do list
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem;
    if(newItem.text !== '') {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {text: '', key: '' }
      })
    }
  }

  strikeItem = item => {
    console.log(item)
  }

  render() {
    return (
      <div>
        <ToDoList 
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <ToDoItems 
          listOfItems={this.state.items}
          strikeItem={this.strikeItem}
        />
      </div>
    );
  }
}

export default App;