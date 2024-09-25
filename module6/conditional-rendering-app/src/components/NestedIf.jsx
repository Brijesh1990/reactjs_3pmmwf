import React from 'react'
export default function NestedIf() {
    const a=10;
    const b=20;
    if(a>b)
    {
        if(a!=0 && b!=0)
        {
          return <h2>a is greater than b</h2>
        }
    }
    else 
    {
       return <h2>a is less than b</h2>
    }
  return (
    <div>
       
    </div>
  )
}
