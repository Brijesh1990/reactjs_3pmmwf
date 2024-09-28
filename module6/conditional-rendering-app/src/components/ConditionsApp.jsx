import React from "react";
function App()
{
    // const a=10;
    // const b=5;
    // if(a>b)
    // {
    //     return <h1>A is greater than B</h1>
    // }
    // else
    // {
    //   return <h1>A is lesser than B</h1>
    // }


    const a=10;
    const b=20;
    const result=a>b?<h1>A is Greter Than B</h1>:<h1>A is Lesser Than B</h1>;
    
    return(
        <>

           {result}

        </>
    )
}

export default App