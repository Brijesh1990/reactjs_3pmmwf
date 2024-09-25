import React from 'react'

export default function IfApp() {
    const age=10;
    if(age>=18)
        return <h1>i am eligible for voting</h1>;
    else 
       return <h1>i am not eligible for voting</h1>;


  return (
    <div>
        
    </div>
  )
}
