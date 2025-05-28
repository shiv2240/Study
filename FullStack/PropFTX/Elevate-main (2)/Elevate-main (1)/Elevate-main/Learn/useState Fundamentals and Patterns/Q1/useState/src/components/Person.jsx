import { useState } from "react";

const Person = () => {
  const [person, setPerson] = useState({ name: "abc" });

  const handleClick =()=>{
    setPerson({...person, name:"Jai"})
  }
  return (
    <>
      <div>Person</div>
      <h1>Name: {person.name}</h1>
      <button onClick={handleClick}>Change name</button>
    </>
  );
};

export default Person;
