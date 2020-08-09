import React from 'react';
import {  FaHamburger } from 'react-icons/fa';
import NavBarHome from './NavBarHome'
import '../App.css'


const Home = (props) => {

    const {search,changeHandler,searchHandler}=props; // destructure of search & clickHandler into props 
    return (
        <div>
        <NavBarHome/>
        
          <div className="jumbotron bg-danger text-white">
          <div className="container">
          <h1 className="food-head display-3"><FaHamburger />Food Recipes</h1>
          <div className="input-group w-50 mx-auto">
           
          <input value={search} onChange={changeHandler}
          type="text" className="form-control" placeholder="Search by recipes names" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
           
            <div className="input-group-append">
                <button onClick={searchHandler}
                className="btn btn-light text-black">Search</button>
            </div>
            </div>
          
           </div>
           </div>
           
        </div>
       
    )
}

export default Home;
