import React from "react";
import  ReactDOM  from "react-dom/client";
//default Import 
//import Header from "./components/Header";
// Named Import
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

/*
                header
                 -logo
                 -Nav Items(Right side) 
                 -cart
                body
                 -search Bar
                 -restro card shou;d have many cards 
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
