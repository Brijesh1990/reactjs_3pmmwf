import React,{useState,useEffect} from 'react'
/* useEffects : useEffects is a types of hook 
                useEffect is functional
                useEffects add some effects in your applications such as add dependency | fetch data in api etc
                
                syntax :

                 useEffect(()=>{},dpendency);


                 1)no dependency : render data again and again
                 2)pass a blank []:render one times of data
                 3)pass a props and state : render one times and we can update any data on any times   
                

*/  
export default function UseEffects() {

     const[count,setCount]=useState(0);

    // useEffect((count)=>{

    //     setCount(setTimeout(count),5000)

    // },[count]);


     useEffect(()=>{
  
        setTimeout(setCount(count+1),2000);
     
    },count);

    

  return (
    <div>

    <h1>The count values is :{count}</h1>

   <button type='button' onClick={()=>setCount(count+1)}>+</button>
      
    </div>
  )
}
