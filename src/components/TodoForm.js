//===========//
//  IMPORTS  //
//===========//
import React from "react";

class TodoForm extends React.Component {
  //==========================//
  //  Constructor with state  //
  //==========================//
  constructor() {
    super();
    this.state = {
      item: ''
    };
  }

  handleChanges = (e) => {
    //==================================//
    // update state with each keystroke //
    //==================================//
    this.setState({ [e.target.name]: e.target.value });
  };

  // class property to submit form
submitItem = e => {
    e.preventDefault();
    this.setState({ item: '' });
    this.props.addItem(e, this.state.item);
}
  render() {
    return (
      <form onSubmit={this.submitItem}>
        <input
          type="text"
          value={this.state.item}
          name="item"
          placeholder="Add Todo Item"
          onChange={this.handleChanges}
          autoComplete="off"
        />
        <button className="addBtn"> Add </button>
      </form>
    );
  }
}

export default TodoForm;
