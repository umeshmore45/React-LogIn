function ToDoFrom(props) {
  console.log(props);
  return (
    <div>
      <h1>Hello</h1>
      <form onSubmit={props.submitForm}>
        <label htmlFor="TodoInput">Todo List</label>
        <input type="text" name="TodoInput" onChange={props.updateTask} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ToDoFrom;
