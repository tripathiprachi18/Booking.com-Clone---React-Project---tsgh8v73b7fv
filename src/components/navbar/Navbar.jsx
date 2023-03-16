import React from 'react'
import './navbar.css';
import { Navigate, useNavigate } from 'react-router-dom';
// import Register from "../../components/register/Register";
function Navbar() {
  const navigate=useNavigate();
  return (
    <div className='navbar'>
        <div className="navContainer">
<span className="logo">Booking.com</span>
<div className="navItems">
    <button className="navButton" onClick={()=> {navigate("/register") }}>Register</button>
    <button className="navButton" onClick={()=>navigate("/login")}>Login</button>
</div>

        </div>
    </div>
  )
}

export default Navbar