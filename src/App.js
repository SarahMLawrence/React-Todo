//===========//
//  IMPORTS  //
//===========//
import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./App.css";

//==================================================//
//  Why store data in state => so it can be changed //
//==================================================//
const todoItems = [
  {
    name: "Mop Floors",
    id: 123,
    completed: false,
  },

  {
    name: "Take Out Trash",
    id: 124,
    completed: false,
  },
];

class App extends React.Component {
  //=========================//
  //  Constructor with State //
  //=========================//
  constructor() {
    //===================================================//
    //  super: calls the constructor of the parent class //
    //  (which is React.Component)                       //
    //===================================================//
    super();
    //initialize the state
    this.state = {
      // WHAT IS THIS? => a keyword that points to the element its inside of
      todoItems,
    };
  }

  toggleItem = (itemId) => {
    console.log(itemId);
    //===============================================================//
    // map over array                                                 //
    // when we find the item we clicked, toggle the completed field   //
    // otherwise, return the item untouched                           //
    //================================================================//
    this.setState({
      //=========================================//
      //  pass in a new state object             //
      //  pulling back previous state todoItems  //
      //=========================================//
      todoItems: this.state.todoItems.map((item) => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();
    //===============================================================//
    // if item is completed (item.completed is true) then filter out //
    //===============================================================//
    this.setState({
      todoItems: this.state.todoItems.filter((item) => !item.completed),
    });
  };

  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoItems: [...this.state.todoItems, newItem]
    });
  }

 

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addItem={this.addItem}/>
        </div>
        <TodoList
          toggleItem={this.toggleItem}
          todoItems={this.state.todoItems}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
