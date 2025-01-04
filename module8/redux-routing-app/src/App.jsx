import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/Store";
import Home from "./Layout";
import Layout from "./Layout";


const App=()=>{
  
  return (
  
    <>
     <Provider store={store}>
       <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
       </Router>
     </Provider>
    </>
  )
}

export default App