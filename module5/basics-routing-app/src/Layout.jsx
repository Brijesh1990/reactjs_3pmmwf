import React from 'react'
import { Link,Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <div>
     <nav className='nav navbar'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About</Link></li>
            <li><Link to="/our-services">Services</Link></li>
            <li><Link to="/contact-us">Contact</Link></li>
            <li><Link to="/create-account">Account</Link></li>
        </ul>
     </nav>
     <Outlet />
      
    </div>
  )
}
