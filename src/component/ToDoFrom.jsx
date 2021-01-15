import styles from "./ToDoFrom.module.css";

function ToDoFrom(props) {
  return (
    <div className={styles["form"]}>
      <form onSubmit={props.submitForm}>
        <label className={styles["label"]} htmlFor="TodoInput">
          Todo List
        </label>
        <input
          className={styles["input"]}
          type="text"
          name="TodoInput"
          onChange={props.updateTask}
        />
        <button className={styles["btn"]} type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default ToDoFrom;
