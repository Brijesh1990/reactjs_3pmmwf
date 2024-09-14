import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
// e-shopper customer panel
import Layout from './Layout'
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import PageNotFound from './components/PageNotFound';

// e-shopper admin panel
import './assets/admin/css/style.css'
import AdminLogin from './components/admin/AdminLogin';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create-account' element={<Register />} />
        <Route path='/view-cart' element={<Cart />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/admin-login' element={<AdminLogin />} />
      </Routes>
    </Router>
  </StrictMode>,
)
