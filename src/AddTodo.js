import react, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: "",
  };

  changeHandler = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label>Add new todo: </label>
          <input
            type="text"
            onChange={this.changeHandler}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
