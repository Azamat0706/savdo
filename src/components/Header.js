import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/products">Elonlar</NavLink>
        </li>
        <li>
          <NavLink to="/add">Elon berish</NavLink>
        </li>

         <p className="nav">
         <Link to="https://t.me/AZIK_0706">Yordam</Link>
         </p>
      </ul>
        
    </header>
  );
};

export default Header;
