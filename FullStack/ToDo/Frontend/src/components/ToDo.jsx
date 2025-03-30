import { useEffect, useState } from "react";
import axios from "axios";

const ToDo = () => {
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    fetchTodo();
  }, []);

  function fetchTodo() {
    axios
      .get("https://todo-73wc.onrender.com/todos/")
      .then((res) => setTasks(res.data))
      .catch((err) => console.log("Error while fetching the data", err));
  }

  function handleAdd() {
    if (!name.trim()) {
      alert("Task name cannot be empty!");
      return;
    }
    axios
      .get("https://todo-73wc.onrender.com/todos/")
      .then((res) => {
        const existingTasks = res.data;
        const checkExist = existingTasks.some(
          (task) => task.task.toLowerCase() === name.toLowerCase()
        );

        if (checkExist) {
          alert("Task already exists!");
          return;
        }

        return axios.post("https://todo-73wc.onrender.com/todos/add", {
          task: name,
          status: "pending",
          createAt: Date.now(),
        });
      })
      .then((res) => {
        if (res) {
          setName("");
          fetchTodo();
        }
      })
      .catch((err) => console.log("Error:", err));
  }

  function handleDelete(id) {
    axios
      .delete(`https://todo-73wc.onrender.com/todos/delete/${id}`)
      .then(() => {
        setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
      })
      .catch((err) => console.log("Error while deleting task", err));
  }

  function handleEdit(id, currentTask) {
    setEditId(id);
    setEditText(currentTask);
  }

  function handleUpdate(id) {
    axios
      .patch(`https://todo-73wc.onrender.com/todos/update/${id}`, {
        task: editText,
      })
      .then(() => {
        setEditId(null);
        fetchTodo();
      })
      .catch((err) => console.log("Error while updating task", err));
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-700 to-black text-white">
      <h1 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-100">
        To-Do List
      </h1>

      {/* Glass Effect Container */}
      <div className="bg-white/10 backdrop-blur-md shadow-lg rounded-xl p-6 w-full max-w-md border border-white/20">
        <div className="flex gap-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Task Name"
            className="border border-gray-400/50 bg-white/10 backdrop-blur-lg text-white rounded-lg px-4 py-2 w-full outline-none placeholder-gray-300 focus:ring-2 focus:ring-gray-500"
          />
          <button
            onClick={handleAdd}
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-800 shadow-md transition-all"
          >
            Add
          </button>
        </div>

        <ul className="mt-6">
          {tasks.map((task) => (
            <li
              key={task._id}
              className="flex justify-between items-center bg-white/10 border border-white/20 p-3 rounded-lg mb-2 backdrop-blur-lg"
            >
              {editId === task._id ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="border border-gray-400/50 bg-white/10 backdrop-blur-lg text-white rounded-lg px-2 py-1 w-full outline-none placeholder-gray-300 focus:ring-2 focus:ring-gray-500"
                  />
                  <button
                    onClick={() => handleUpdate(task._id)}
                    className="bg-green-500 text-white px-3 py-1 rounded-lg ml-2 hover:bg-green-600 shadow-md transition-all"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditId(null)}
                    className="bg-gray-400 text-white px-3 py-1 rounded-lg ml-2 hover:bg-gray-500 shadow-md transition-all"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <span className="flex-1 text-gray-200">{task.task}</span>
                  <button
                    onClick={() => handleEdit(task._id, task.task)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded-lg ml-2 hover:bg-yellow-600 shadow-md transition-all"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg ml-2 hover:bg-red-600 shadow-md transition-all"
                  >
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
