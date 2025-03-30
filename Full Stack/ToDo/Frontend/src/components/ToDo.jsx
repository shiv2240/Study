import { useState } from "react";
import axios from "axios";
const ToDo = () => {
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState([]);

  function fetchTodo() {
    axios
      .get("http://localhost:2012/todos/")
      .then((res) => setTasks(res.data))
      .catch((err) => console.log("Error while fetching the data",err));
  }

  function handleAdd() {
    axios
      .post("http://localhost:2012/todos/add", {
        task: name,
        status: "pending",
        createAt: Date.now,
      })
      .then(() => {
        setName("");
        fetchTodo();
      })
      .catch((err) => console.log("Erro for add", err));
  }

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAdd} type="button">
        Add
      </button>
      <ul>
        {tasks.map((task, i)=>(
            <li key ={i}>
                {task.name} - {task.status} - {task.createdAt}
            </li>
        ))}
      </ul>
    </>
  );
};

export default ToDo;
