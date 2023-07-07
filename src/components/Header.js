import { useState } from "react";

 const loggedinUser = () =>{
    //API call to Check Authenticate
    return true;
 }


  const Title =() => (
    <a href="/">  
        <img className="logo" alt="logo" src="https://cdn.logojoy.com/wp-content/uploads/2018/05/01105727/8_big33-768x591.png"></img>
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
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACTS</li>
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
