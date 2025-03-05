import { useState } from "react";

const Ctof = () => {
  const [cel, setCel] = useState(0);
  const [fah, setFah] = useState(0);
  function handleCel(e) {
    const v = e.target.value;
    setCel(v);
    setFah((v * 9) / 5 + 32);
  }
  function handleFah(e) {
    const v = e.target.value;
    setFah(v);
    setCel(((v - 32) * 5) / 9);
  }
  return (
    <div>
      <h1>Celsius to Fahrenheit</h1>
      <div>
        <input
          type="number"
          value={cel}
          placeholder="Enter Celsius"
          onChange={handleCel}
        />
      </div>
      <h1>Fahrenheit to Celsius</h1>
      <div>
        <input
          type="number"
          value={fah}
          placeholder="Enter Fahrenheit"
          onChange={handleFah}
        />
      </div>
    </div>
  );
};

export default Ctof;
