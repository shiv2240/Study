import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [taskList, setTasklist] = useState([]);
  const [sortOrder, setSortorder] = useState("--");

  const sortedTask = [...taskList].sort((a, b) => {
    if (sortOrder === "asc") return a.text.localeCompare(b.text);
    if (sortOrder === "desc") return b.text.localeCompare(a.text);
    return 0;
  });

  function handleChange(i) {
    setTasklist(
      taskList.map((t, id) =>
        id === i ? { ...t, completed: !t.completed } : t
      )
    );
  }

  function updateTask(i) {
    const newTask = prompt("Enter your new task", taskList[i].text);
    if (newTask === "") {
      alert("Please write something");
    } else {
      setTasklist(
        taskList.map((t, id) => {
          return id === i ? { ...t, text: newTask } : t;
        })
      );
    }
  }

  function deleteTask(i) {
    setTasklist(taskList.filter((_, id) => id !== i));
  }

  function handleSubmit() {
    setTasklist([...taskList, { text: task, completed: false }]);
    setTask("");
  }
  return (
    <div>
      <h1>ToDo Application</h1>
      <select value={sortOrder} onChange={(e) => setSortorder(e.target.value)}>
        <option value="--">--</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <input
        type="text"
        value={task}
        placeholder="Enter your task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Task</button>
      <div>
        <ul>
          {sortedTask.map((t1, i) => (
            <li
              key={i}
              style={{
                listStyle: "none",
              }}
            >
              {" "}
              {i + 1}.
              <span
                style={{
                  marginLeft: "10px",
                  textDecoration: t1.completed ? "line-through" : "none",
                }}
              >
                {t1.text}
              </span>
              <button onClick={() => deleteTask(i)}>Delete</button>
              <button onClick={() => updateTask(i)}>Update</button>
              <input
                type="checkbox"
                checked={t1.completed}
                onChange={() => handleChange(i)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
