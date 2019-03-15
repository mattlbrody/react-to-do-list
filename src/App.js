import React, { Component } from 'react';
import ToDoList from './ToDoList';
import ToDoItems from './ToDoItems';

class App extends Component {
  state = { items: [], currentItem: {text:'', key:'' }};

  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    this.setState({ currentItem });
  }

  addItem = (e) => {
    e.preventDefault()
    const newItem = this.state.currentItem;
    // if the input is not empty
    if(newItem.text !== '') {
      // create a var containing the new item in the items array
      const items = [...this.state.items, newItem];
      // update the items state to contain the new item
      this.setState({
        items: items,
        currentItem: {text: '', key: '' }
      })
    }
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
        />
      </div>
    );
  }
}

export default App;