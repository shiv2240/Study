import { useState } from "react"


const Form = () => {
    const [ formdata, setFormdata] = useState({firstname:"", lastname:""})

    const handleChange = (e) =>{
        setFormdata({...formdata,[e.target.name]:e.target.value})
        console.log(formdata)
    }
  return (
    <div>
        <input name="firstname" value={formdata.firstname} onChange={handleChange} />
        <input name="lastname" value={formdata.lastname} onChange={handleChange} />
    </div>
  )
}

export default Form