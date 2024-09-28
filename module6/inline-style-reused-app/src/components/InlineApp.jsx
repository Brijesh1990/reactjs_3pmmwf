import React from "react";

const inline1={
    width:"50%",
    height:"auto",
    margin:"auto",
    padding:"25px",
    background:"black",
    marginTop:"5%"
    
}

const inline2={
    color:"blue",
    textalign:"center"
}

const inline3={
       color:"white",
       textalign:"center"
}

function App()
{

    const styl1={
        ...inline1
    }

    const styl2={
        ...inline2
    }
    const styl3={
        ...inline3
    }


    return(
        <>
            <div style={styl1}>
                <h1 style={styl2}>Get in Touch with us!</h1>
                <p style={styl3}>Lorem ipsum highlights</p>
            </div>
        </>
    )
}

export default App