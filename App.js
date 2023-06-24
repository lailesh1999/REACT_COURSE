import React from "react";
import  ReactDOM  from "react-dom/client";

/*
                header
                 -logo
                 -Nav Items(Right side) 
                 -cart
                body
                 -search Bar
                 -resuaturebt list
                 -restro cart
                  -Image
                  -name
                  -ratting
                  -Cusines
                  -
                footer
                 -links 
                 -copryrigthts
                 

                */
// const heading = React.createElement(
//     "h1",{
//             id:"heading1",
//             key:"h1"
//         }," heading 1  "
//         );

// const heading1 = React.createElement(
//     "h1",
// {
//     id : "heading2",
//     key:"h2"
// },"heading 2" );
                        
//jsx expression
//reactElement
const Title =() => (
<a href="/">  
    <img className="logo" alt="logo" src="https://cdn.logojoy.com/wp-content/uploads/2018/05/01105727/8_big33-768x591.png"></img>
</a>
);



const Header = () =>{
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
    </div>
    );
};   




const Body = () =>{
    return (
            <h1>BODY</h1>
    );
}

   const Footer = () =>{
    return (
            <h1>Footer</h1>
    );
}

const AppLayout = () =>{
    return (
        <>
           <Header/>
           <Body/>
           <Footer/>
        </>
            
        
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
//passing react element inside the  root 
root.render(<AppLayout/>);
