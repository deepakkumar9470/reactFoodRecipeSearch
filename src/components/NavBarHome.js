import React from 'react'
import {  FaUtensils } from 'react-icons/fa';
import '../App.css'
const NavBarHome = () => {
    return (
        <div className="nav-div">
        <nav className="navbar  navbar-light">
        <a className="navbar-brand" href="#"><FaUtensils/>Food Recipe</a>
        <a className="navbar-brand" href="#">Enjoy Delicious Foods</a>
        <a className="navbar-brand" href="#">Make a day happy with good food</a>
        
      
    
      </nav>
        </div>
    );
}

export default NavBarHome;
