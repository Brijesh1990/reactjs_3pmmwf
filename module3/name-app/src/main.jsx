import React  from "react";
import ReactDOM from 'react-dom/client'
import NameApp from "./NameApp";
import About from "./About";
const nm="My name is Brijesh";
import Inline from "./InlineApp";
// import External from "./ExternalApp";
// import Internal from "./InternalApp";
import './assets/css/style.css'
import 'animate.css'
import Anim from "./AnimationsApp";
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(

    // what is React.Fragment : access multiple html elements there we used react fragements
    // <>
    // <h1>Hey  : {nm}</h1>
    // <NameApp />
    // </>

    // <div>
    // <h1>Hey  : {nm}</h1>
    // <NameApp />
    // </div>

    
    <React.Fragment>
    {/* <h1>Hey  : {nm}</h1>
    <NameApp />
    <About /> */}
    {/* <Inline /> */}
    {/* <External /> */}
   {/* <Internal /> */}

   <Anim />
</React.Fragment>

)