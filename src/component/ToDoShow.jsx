import { Component } from "react";

class ToDoShow extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.todo.map((task) => {
            return (
              <div key={task.taskID}>
                {" "}
                <p>{task.taskName}</p>{" "}
                <button
                  onClick={(e) => {
                    this.props.deleteTask(task.taskID, e);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ToDoShow;
