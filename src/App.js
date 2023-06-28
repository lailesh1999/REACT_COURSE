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





//config Driven UI 

// const config =[
//     {
//         type:"carousel",
//         card:[
//             {
//                 offerName:"50% off"
//             },
//             {
//                 offerName:"No Delivery Charge"
//             }
//         ]
//     },
//     {
//         type:"restaurent",
//         card:[
//             {
//                 name:"BURGER KING",
//                 image:"https://cdn.tasteatlas.com/images/toplistarticles/08c818739e4b48ce96d319c16f4cc0ca.jpg?m=facebook",
//                 cusiness:["Burger","American"],
//                 rating:"4.2"
//             },
//             {
//                 name:"KFC",
//                 image:"https://cdn.tasteatlas.com/images/toplistarticles/08c818739e4b48ce96d319c16f4cc0ca.jpg?m=facebook",
//                 cusiness:["Burger","American"],
//                 rating:"4.2"
//             },
//         ]
//     }
// ]




//props
// const Body = () =>{
//     return (
//         <div className="restaurent-list">
//             {
//                 // res is object of restaurentList for exmpale resturentList[0] as one object and resturentList[1] is second object
//                 restaurentList.map((res,index) => {
//                     return <RestrauntCard  {...res} key={index} />;
//                 })}
                
//         </div>
            
//     );
// };

   

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
