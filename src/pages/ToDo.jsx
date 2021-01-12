import { Component } from "react";
import ToDoFrom from "../component/ToDoFrom";
import ToDoShow from "../component/ToDoShow";
import { todoUrl } from "../services/FetchData";

class ToDo extends Component {
  state = {
    todoList: [],
  };

  submitForm = (event) => {
    event.preventDefault();
    console.log("form", event.target.TodoInput.value);
    fetch(todoUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.props.location.state,
      },
      body: JSON.stringify({ taskName: event.target.TodoInput.value }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then(async (task) => {
        let taskList = [...this.state.todoList];
        taskList.push(await task);
        this.setState({ todoList: taskList });
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
    event.target.TodoInput.value = "";
  };

  deleteTask = (event) => {
    console.log(event);
    fetch(`${todoUrl}/${event}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.props.location.state,
      },
      body: JSON.stringify(),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let taskList = [...this.state.todoList];
        taskList.forEach((task, index) => {
          if (data.taskID === task.taskID) {
            taskList.splice(index, 1);
            this.setState({ todoList: taskList });
          }
        });
      });
  };

  componentDidMount = (event) => {
    fetch(todoUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.props.location.state,
      },
      body: JSON.stringify(),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          todoList: data,
        });
      })
      .catch((e) => {
        console.log(e);
        return e;
      });
  };

  render() {
    return (
      <div>
        {this.props.location.state ? (
          <div>
            <ToDoFrom submitForm={this.submitForm} />
            <ToDoShow todo={this.state.todoList} deleteTask={this.deleteTask} />
          </div>
        ) : (
          <h1>Login First</h1>
        )}
      </div>
    );
  }
}

export default ToDo;
