import React from "react";

// function App()
// {
// var numrows=5;    
// var Object_rows = [];
// for (var i = 0; i <= numrows; i++) {
//   Object_rows.push(<App />);
// }

//     return (
//         <>
//         {Object_rows}
//         </>
//     )
// }

// export default App
const Data=[
    {
        id:1,
        name:"brijesh",
        age:35
    },

    {
        id:2,
        name:"Rajesh",
        age:35
    }
]

function App()
{
    Data.forEach(Display);
    function Display(item)
    {
        return item;
    }

    return(
        <>

        {Data && Data.map((item)=>{

        return(
            <>
            <h2 align='center'>{item.id}</h2>
            <h2 align='center'>{item.name}</h2>
            <h2 align='center'>{item.age}</h2>

            </>
        )
        }
        )}
           
        </>
    )

}

export default App
