import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  useEffect(() => {
    const storedNames = localStorage.getItem("names");
    if (storedNames) {
      setNames(JSON.parse(storedNames));
    }
  }, []);

  function handleSubmit() {
    alert(`Hello ${name}`);
    const storedNames = localStorage.getItem("names");
    const parsedStoredNames = storedNames ? JSON.parse(storedNames) : [];
    const updatedNames = [...parsedStoredNames, name];
    setNames(updatedNames);
    localStorage.setItem("names", JSON.stringify(updatedNames));
    setName("");
  }

  return (
    <>
      <div style={{ margin: "20px", padding: "20px" }}>Hello World!</div>
      <div style={{ marginLeft: "25px" }}>My name is Shiv</div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {names.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
