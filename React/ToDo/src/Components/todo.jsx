import { useState, useEffect } from "react";
import "./todo.css";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortCriteria, setSortCriteria] = useState("None");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
    const storedCompletedTasks =
      JSON.parse(localStorage.getItem("completedTasks")) || [];
    setCompletedTasks(storedCompletedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [tasks, completedTasks]);

  function handleAddTask() {
    if (newTask.trim() !== "" && dueDate !== "") {
      setTasks([...tasks, { task: newTask, dueDate }]);
      setNewTask("");
      setDueDate("");
    }
  }

  function handleDelete(index) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    setCompletedTasks(completedTasks.filter((_, i) => i !== index));
  }

  function handleEdit(index) {
    setEditIndex(index);
    setEditTask(tasks[index].task);
    setDueDate(tasks[index].dueDate);
  }

  function handleSaveTask() {
    const updatedTasks = tasks.map((task, index) =>
      index === editIndex ? { ...task, task: editTask, dueDate } : task
    );
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditTask("");
    setDueDate("");
  }

  function handleCompleteTask(index) {
    const newCompletedTasks = [...completedTasks];
    newCompletedTasks[index] = !newCompletedTasks[index];
    setCompletedTasks(newCompletedTasks);
  }

  function handleFilterChange(newFilter) {
    setFilter(newFilter);
  }

  function handleSearchChange(e) {
    setSearchQuery(e.target.value);
  }

  function handleSortChange(criteria) {
    setSortCriteria(criteria);
  }

  function getFilteredTasks() {
    let filteredTasks = tasks;
    if (filter === "Completed") {
      filteredTasks = tasks.filter((_, index) => completedTasks[index]);
    } else if (filter === "Pending") {
      filteredTasks = tasks.filter((_, index) => !completedTasks[index]);
    }

    if (searchQuery) {
      filteredTasks = filteredTasks.filter((task) =>
        task.task.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortCriteria === "DueDate") {
      filteredTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    } else if (sortCriteria === "Alphabetical") {
      filteredTasks.sort((a, b) => a.task.localeCompare(b.task));
    }

    return filteredTasks;
  }

  return (
    <>
      <h1>My To-Do List</h1>
      <input
        type="text"
        placeholder="Enter Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <button onClick={handleAddTask}>Add Task</button>
      <div>
        <button onClick={() => handleFilterChange("All")}>All</button>
        <button onClick={() => handleFilterChange("Completed")}>
          Completed
        </button>
        <button onClick={() => handleFilterChange("Pending")}>Pending</button>
      </div>
      <input
        type="text"
        placeholder="Search Tasks"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div>
        <button onClick={() => handleSortChange("DueDate")}>
          Sort by Due Date
        </button>
        <button onClick={() => handleSortChange("Alphabetical")}>
          Sort Alphabetically
        </button>
      </div>
      <ul>
        {getFilteredTasks().map((task, ind) => (
          <li
            key={ind}
            style={{
              textDecoration: completedTasks[ind] ? "line-through" : "none",
            }}
          >
            {editIndex === ind ? (
              <>
                <input
                  type="text"
                  value={editTask}
                  onChange={(e) => setEditTask(e.target.value)}
                />
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
                <button onClick={handleSaveTask}>Save</button>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={!!completedTasks[ind]}
                  onChange={() => handleCompleteTask(ind)}
                />
                {task.task} (Due: {task.dueDate})
                <button onClick={() => handleEdit(ind)}>Edit</button>
                <button onClick={() => handleDelete(ind)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDo;
