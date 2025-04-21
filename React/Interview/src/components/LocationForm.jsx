  import { useEffect, useState } from "react";

  const data = {
    India: ["Delhi", "Mumbai"],
    USA: ["New York", "LA"],
  };

  function LocationForm() {
    const [country, setCountry] = useState("");
    const [states, setStates] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");
    const [savedLocations, setSavedLocations] = useState([]); // 💾 For displaying saved cities

    useEffect(() => {
      const newStates = data[country]?.filter((city) =>!savedLocations.some((loc) => loc.city === city && loc.country === country)) || [];
      setStates(newStates);
      setSelectedCity("");
    }, [country, savedLocations]);

    const handleSave = () => {
      if (country && selectedCity) {
        setSavedLocations((prev) => [...prev, { country, city: selectedCity }]);
        setSelectedCity("");
      }
    };

    return (
      <div>
        <h2>Select Country & City</h2>

        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">-- Select Country --</option>
          {Object.keys(data).map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          disabled={!country}
        >
          <option value="">-- Select City --</option>
          {states.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <button onClick={handleSave} disabled={!country || !selectedCity}>
          Save City
        </button>

        <h3>Saved Locations:</h3>
        <ul>
          {savedLocations.map((loc, index) => (
            <li key={index}>
              {loc.country} - {loc.city}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  export default LocationForm;
