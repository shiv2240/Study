import { useState } from "react";

function ToDo() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleAdd() {
    if (task === "") {
      alert("Enter your task");
    } else {
      setTaskList([...taskList, task]);
      setTask("");
    }
  }
  function handleDelete(ind) {
    setTaskList(taskList.filter((task, i) => i != ind));
  }
  function handleEdit(ind) {
    const newTask = prompt("Enter your task", taskList[ind]);
    if (newTask === "") {
      alert("Please enter the task to replace");
    } else {    
      setTaskList(taskList.map((task, i) => (i === ind ? newTask : task)));
    }
  }
  return (
    <>
      <h1>ToDo App</h1>
      <input
        placeholder="Enter your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <button onClick={handleAdd}>Add Task</button>
      <ul>
        {taskList.map((task, i) => (
          <li key={i}>
            {task} <button onClick={() => handleDelete(i)}>Delete</button>
            <button onClick={() => handleEdit(i)}>Edit</button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default ToDo;
