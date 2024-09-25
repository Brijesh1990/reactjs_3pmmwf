import React,{Component,useState} from "react";

class Garage extends Component 
{
    render()
    {
        const[data,setState]=useState("Brijesh");
        return(
            <>
                <h1>This is Patel automibiles</h1>
                <h2>This is a : {data}</h2>
            </>
        )
    }
}

export default Garage