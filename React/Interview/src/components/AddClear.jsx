import { useState } from "react";

function AddClear() {
  const [entries, setEntries] = useState([]);

  function handleAdd() {
    setEntries([...entries, { day: "", startTime: "", endTime: "" }]);
  }

  function handleClear() {
    setEntries([]);
  }

  function handleRemove(index) {
    const updated = entries.filter((_, i) => i !== index);
    setEntries(updated);
  }

  return (
    <>
      <button onClick={handleAdd}>Add New</button>
      <button onClick={handleClear}>Clear All</button>

      {entries.map((entry, index) => (
        <div
          key={index}
          style={{
            marginTop: "10px",
            border: "1px solid #ccc",
            padding: "10px",
          }}
        >
          <label>Day</label>
          <select>
            <option>Select Day</option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
            <option>Sunday</option>
          </select>

          <div>
            <label>Start Time</label>
            <input type="time" />
          </div>

          <div>
            <label>End Time</label>
            <input type="time" />
          </div>

          <button onClick={() => handleRemove(index)}>X</button>
        </div>
      ))}
    </>
  );
}

export default AddClear;
