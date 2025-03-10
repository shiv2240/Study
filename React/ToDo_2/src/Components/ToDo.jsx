import { useState } from "react";

function TODo() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleSubmit() {
    if (task === "") {
      alert("Please enter a task");
    } else {
      setTaskList([...taskList, task]);
      setTask("");
    }
  }

  function handleDelete(ind) {
    setTaskList(taskList.filter((task, i) => i !== ind));
  }

  function handleEdit(ind) {
    const newTask = prompt("Edit your task", taskList[ind]);
    if (newTask === "") {
      alert("Please edit your task");
    } else {
      setTaskList(taskList.map((task, i) => (i === ind ? newTask : task)));
    }
  }

  return (
    <div>
      <h1>ToDo</h1>
      <input
        type="text"
        onChange={(e) => setTask(e.target.value)}
        value={task}
        placeholder="Enter your task"
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {taskList.map((task, i) => (
          <li key={i}>
            {task}
            <button onClick={() => handleDelete(i)}>Delete</button>
            <button onClick={() => handleEdit(i)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TODo;
