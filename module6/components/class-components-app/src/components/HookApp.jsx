import React,{useState} from "react";
function App()
{
    const[data,setData]=useState("This is a Brijesh");
    return (
        <>

        <h1>{data}</h1>

        </>
    )
}

export default App