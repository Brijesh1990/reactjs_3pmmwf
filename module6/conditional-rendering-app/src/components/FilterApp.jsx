import React from "react";
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
    },
    {
        id:3,
        name:"sameer",
        age:24
    },

    {
        id:4,
        name:"Yashraj",
        age:35
    },
    {
        id:5,
        name:"Dhaval",
        age:34
    },

    {
        id:6,
        name:"Rajesh",
        age:36
    }
]

function App()
{
    return(
        <>
            {/* applied loop in jsx to return all data */}

            {/* {Data && Data.map((item)=>{
                return(
                    <>
                      <h3 align='center'>{item.id}</h3>
                      <h3 align='center'>{item.name}</h3>
                      <h3 align='center'>{item.age}</h3>
                    </>
                )
            })} */}


            {/* {Data.map((item)=>{
                return(
                    <>
                      <h3 align='center'>{item.id}</h3>
                      <h3 align='center'>{item.name}</h3>
                      <h3 align='center'>{item.age}</h3>
                    </>
                )
            })} */}


            {Data.filter((key,items)=>items<2).map((item)=>{
                return(
                    <>
                      <h3 align='center'>{item.id}</h3>
                      <h3 align='center'>{item.name}</h3>
                      <h3 align='center'>{item.age}</h3>
                    </>
                )
            })}

        </>
    )
}

export default App