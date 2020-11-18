import  "./navbar.scss";
import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className = "mainMenu">
  
     
          <li className = "mainMenu__item"><NavLink  to="/home" className = "mainMenu__item">Home</NavLink></li>
          <li className = "mainMenu__item"><NavLink  to="/app" className = "mainMenu__item">App</NavLink></li>
      
        {/* <NavLink path = ""></NavLink>   */}
   
    </nav>
  );
};

export default Navbar;
