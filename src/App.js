import React, { Children } from "react";
import  ReactDOM  from "react-dom/client";
//default Import 
//import Header from "./components/Header";
// Named Import
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Error from "./components/Error";
import About from "./components/About";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Contact from "./components/Contact";


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
           { /* outlet */ }
           <Outlet/>
           <Footer/>
        </>
                    
    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        errorElement:<Error />,
        children : [
            {
                path:"/",
                element:<Body />
               },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            
            
        ],
    },
    {
        path:"/about",
        element:<About />,
        errorElement:<Error />
    }
]);




const root = ReactDOM.createRoot(document.getElementById("root"));
//passing react element inside the  root 
root.render(<RouterProvider router={appRouter}/>);
