import { useState } from "react";
import Logo from "../assets/images/food.jpg";

import {Link } from "react-router-dom";
 const loggedinUser = () =>{
    //API call to Check Authenticate
    return true;
 }
//SPA Single page Application
//two types of routing client side and Server Side Routing

  const Title =() => (
    <a href="/">  
        <img className="logo" alt="logo" src={Logo}></img>
    </a>
);

 const Header = () =>{
    const [loggedIN,setLoggedIN] = useState(false);
    const title  = "FOOD VILLA";
        return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                
                    <li><Link to="/">HOME</Link></li>
                    
                  
                    <li><Link to="/about">ABOUT</Link></li>
                  
                    <li><Link to="/contact">CONTACTS</Link></li>
                    <li>CART</li>
                </ul>
            </div>
            {
                //JS EXPRESSION AND STATEMENT 
                loggedIN?<button onClick={() =>setLoggedIN(false)}>LOGOUT</button>:<button onClick={() =>setLoggedIN(true)} >LOGIN</button>
            }
            
            
        </div>
    );
};   

export default Header;
