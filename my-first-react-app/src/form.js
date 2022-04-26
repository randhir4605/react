import { useState } from 'react';

function MyForm(){
    const [name, setName]=useState("");

    const handleSubmit = (event)=>{
        alert(name);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Enter your name :</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="submit" />
        </form>
    );
}

export default MyForm;