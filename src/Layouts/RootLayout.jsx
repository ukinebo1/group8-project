import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartArrowDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/Images/Frame 11.png';
import { NavLink, Outlet } from 'react-router-dom';
import rectangle3 from '../assets/Images/Rectangle 3.png';
import { useState } from "react";

const Rootlayout = () => {
  const [isOpen, setIsOpen] = useState(false); // State for menu visibility

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="root-layout">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="" />
          <h1>
            <span>G</span>-Ate
          </h1>
        </div>
        <nav > {/* Toggle visibility based on state */}
          <div className="hamburger-menu" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className={`nav-links ${isOpen ? 'show' : 'hide'}`}> {/* Toggle visibility with class */}
            <NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#990000' : '#000' })}>
              Home
            </NavLink>
            <NavLink to="menu" style={({ isActive }) => ({ color: isActive ? '#990000' : '#000' })}>
              Menu
            </NavLink>
            <NavLink to="about us" style={({ isActive }) => ({ color: isActive ? '#990000' : '#000' })}>
              About Us
            </NavLink>
            <NavLink to="reservation" style={({ isActive }) => ({ color: isActive ? '#990000' : '#000' })}>
              Reservation
            </NavLink>
          </div>
        </nav>

        <div className="flex-row-3">
          <input type="text" placeholder="Search" />
          <p>
            <FontAwesomeIcon icon={faSearch} />
          </p>
          {/* Add shopping cart icon if needed */}
          {/* <p>
            <FontAwesomeIcon icon={faCartArrowDown} />
          </p> */}
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Rootlayout;
