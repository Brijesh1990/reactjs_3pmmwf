import React from "react";
function App(props)
{
    return(
        <>
            <h1>Employee name is :{props.name}</h1>
        </>
    )
} 

function Employee(props)
{
    return(
        <>
            <App name="Brijesh kumar pandey" />
            <h2>Employee company details :{props.compname}</h2>
        </>
    )
}

export default Employee