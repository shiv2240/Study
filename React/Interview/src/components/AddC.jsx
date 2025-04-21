import { useState } from "react";

function AddC() {
  const [entries, setEntries] = useState([]);
  function handleAdd() {
    setEntries([...entries, { day: "", startTime: "", endTime: "" }]);
  }
  function handleClear() {
    setEntries([]);
  }
  function handleDelete(ind) {
    setEntries(entries.filter((entry, i) => i != ind));
  }
  return (
    <>
      <button onClick={handleAdd}>Add New</button>
      <button onClick={handleClear}>Clear All</button>
      {entries.map((entry, ind) => (
        <div key={ind}>
          <label>Day</label>
          <select>
            <option>Sunday</option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
          </select>
          <div>
            <label>Start Time</label>
            <input type="time" />
          </div>
          <div>
            <label>End Time</label>
            <input type="time" />
          </div>
          <button onClick={() => handleDelete(ind)}>Clear</button>
        </div>
      ))}
    </>
  );
}
export default AddC;
