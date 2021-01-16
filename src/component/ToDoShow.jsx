import { Component } from "react";
import styles from "../styles/component/ToDoShow.module.css";

class ToDoShow extends Component {
  render() {
    return (
      <div className={styles["task"]}>
        <div>
          {this.props.todo.map((task) => {
            return (
              <div key={task.taskID} className={styles["flex"]}>
                {" "}
                <p className={styles["para"]}>{task.taskName}</p>{" "}
                <button
                  onClick={(e) => {
                    this.props.deleteTask(task.taskID, e);
                  }}
                  className={styles["btn"]}
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
