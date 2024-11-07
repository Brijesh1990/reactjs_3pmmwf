import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import DeleteData from './Components/DeleteData.jsx'
import EditData from './Components/EditData.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Router>
   <Routes>
    <Route path='/' element={<App />} />
    <Route path='/delete-data/:id' element={<DeleteData />} />
    <Route path='/edit-data/:id' element={<EditData />} />
   </Routes> 
  </Router>
    
  </StrictMode>,
)
