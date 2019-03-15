import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList'

class App extends Component {
  state = { item: '', booklist: [] };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.setState({ booklist: this.state.item})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input 
            value={this.state.item}
            onChange={e => this.setState({ item: e.target.value })}
          />
          <button>Add Item</button>
        </form>
        <ToDoList />
      </div>
    );
  }
}

export default App;
