import React,{useState} from 'react'
/* useState() : useState is a types of hooks 
                useState hooks is hold an information of state
                useState  are used to stored multiple objects data
                useState is used to destructured of any types of data
                
*/
export default function UseState() {

    // const[data,setData]=useState("red");

    // counter app
    // const[count,setCount]=useState(0);

    // useState can hold multiple values
    // const[color,setColor]=useState("red");
    // const[model,setModel]=useState("1986");
    // const[year,setYear]=useState("1986");


    // useState can hold multiple properties in an objects

    const[data,setData]=useState({

        color:"red",
        model:"1986",
        manufactured:"1986",
        brand:"maruti suzuki"
    })


  return (
    <div>


    {/* <h1>The color of Car is {data}</h1>  
    <button type='button' onClick={()=>setData("pink")}>Click to Update</button> */}
    
    {/* <h1>The count values is :{count}</h1>
    <button type='button' onClick={()=>setCount(count+1)}>+</button> &nbsp;
    <button type='button' onClick={()=>setCount(count-1)}>-</button> */}
    
    {/* access multiple values */}
    {/* <h1>The car color is {color} and Model is {model} and manufacturing years is {year}</h1>
     */}


     {/* access multiple objects values */}

     <h1>The car color is :{data.color}  <br /> The car model is : {data.model} <br/> The car manufacturing years is : {data.manufactured} <br /> The brand of car is :{data.brand} </h1>
    
    </div>
  )
}
