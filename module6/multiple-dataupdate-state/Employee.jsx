import React,{useState} from "react";
function Employee()
{
    const[data,setData]=useState("Brijesh kumar Pandey");
    return(
        <>
            <h1>The name of Employee is :{data}</h1>
            <h3><button type="button" onClick={()=>setData('Rahul kumar Patel')}>click to Update</button></h3>
        </>
    )
}

export default Employee