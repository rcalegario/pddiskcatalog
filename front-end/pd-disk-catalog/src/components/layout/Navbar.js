import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <NavLink to='/disks'>PD Disk Catalog</NavLink>
          <ul className="right">
            <li><NavLink to='/disks'>Disks</NavLink></li>
            <li><NavLink to='/disks/add'>Add Disks</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;