import React from 'react'
import { Container,Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <Container fluid className='bg-dark text-white'>
      <Nav className='bg-dark p-3'>
       <ul className='navbar-links'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About</Link></li>
        <li><Link to="/contact-us">Contact</Link></li>
        <li><Link to="/feedback-us">Feedback</Link></li>
       </ul>
      </Nav> 
    </Container>
  )
}
