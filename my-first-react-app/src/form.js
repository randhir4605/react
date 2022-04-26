import { useState } from 'react';

function MyForm(){
    const [inputs,setInputs]=useState({});

    const handleSubmit = (event)=>{
        alert(inputs.age+" "+inputs.name);
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
      
    return(
        <form onSubmit={handleSubmit}>
            <label>Enter your name :</label>
            <input type="text" name="name" value={inputs.name} onChange={handleChange} />
            <input type="number" name="age" value={inputs.age} onChange={handleChange}/>
            <input type="submit" />
        </form>
    );
}

export default MyForm;