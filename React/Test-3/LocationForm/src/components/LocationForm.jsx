import { useState } from "react"
const data = {
    Japan:["New Delhi", "Mumbai"],
    USA:["Canada","Sydney"]
}

function LocationForm() {
const [country, setCountry] = useState("")
const [city, setCity] = useState("")
  return (
    <>
      <h1>Location Dropdown form</h1>
      <select value={country} onChange={(e)=>{setCountry(e.target.value)}}>
        <option value="">--Select a country--</option>
        {Object.keys(data).map((c)=>(
            <option key={c}>{c}</option>    
        ))}
      </select>
      <select value={city} onChange = {(e)=>setCity(e.target.value)} disabled={!country}>
      <options value="">--Select a city--</options>
      
      </select>
    </>
  )
}

export default LocationForm;
