import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/Store";
import Home from "./components/Home";

const App=()=>{
  
  return (
  
    <>
     <Provider store={store}>
     
       <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
       </Router>
     </Provider>
    </>
  )
}

export default App