import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Account from './components/Account'
import NotFound from './components/PageNotFound'
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
         <Route index element={<Home />} /> 
         <Route path="/about-us" element={<About />} />
         <Route path="/our-services" element={<Services />} />
         <Route path="/contact-us" element={<Contact />} />   
         <Route path="/create-account" element={<Account />} />
         <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
