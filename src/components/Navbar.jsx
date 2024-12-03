import React from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/javahunt-logo.png'


export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar-logo'>
            <img src={logo} alt="Java Hunt Logo" />
        </div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/favorites">Favorite</Link>
            </li>
        </ul>
    </nav>
  )
}
