import React from 'react'

export default function IfElseIfApp() {
    const a=50;
    const b=55;
    const c=55
    if(a>b && a>c)
        return <h1>a is max numbers</h1>
    else if(b>a && b>c)
        return <h1>b is max numbers</h1>

    else if(c>a && c>b)
        return <h1>c is max numbers</h1>
    
    else
       return <h1>something went wrong please check</h1>
        
      
  return (
    <div>
      
    </div>
  )
}
