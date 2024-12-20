import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TiThMenu } from 'react-icons/ti';
import { IoHome } from 'react-icons/io5';
import { MdBedroomChild } from 'react-icons/md';
import './Header.css';
import Logo2 from '../../assets/Logo2.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="nav">
      <div className="logo">
        <img src={Logo2} alt="Logo" />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <TiThMenu size={30} />
      </div>
      <div className={`nav-link ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              onClick={closeMenu}
            >
              <span className="icon"><IoHome /></span>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="room"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              onClick={closeMenu}
            >
              <span className="icon"><MdBedroomChild /></span>
              <span>Rooms</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="login" className={({ isActive }) => (isActive ? 'active' : undefined)} onClick={closeMenu}>
              <span className="icon"><MdBedroomChild /></span>
              <span>Login</span>
            </NavLink>

          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
