import React from "react";
import TodoList from "./components/TodoList";

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

  //================================//
  //  Class method to update state  //
  //================================//
  toggleItem = (itemId) => {
    console.log(itemId);
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
        </div>
        <TodoList todoItems={this.state.todoItems} />
      </div>
    );
  }
}

export default App;
