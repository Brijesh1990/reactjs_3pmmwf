import React,{useState} from "react";
function App()
{
    // destructure of state
    const[data,setData]=useState("Brjesh kumar pandey");
    return(
        <>
            <h1>Name of users is :{data}</h1>
            <button type="button" onClick={()=>setData("sameer kumar")}>Update Name</button>
        </>
    )
}

export default App