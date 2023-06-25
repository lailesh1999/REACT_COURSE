import React from "react";
import  ReactDOM  from "react-dom/client";

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

const restaurentList = [{
    name:"BURGER KING",
    image:"https://cdn.tasteatlas.com/images/toplistarticles/08c818739e4b48ce96d319c16f4cc0ca.jpg?m=facebook",
    cusiness:["Burger","American"],
    rating:"4.2"
},
{
    name:"BURGER KING",
    image:"https://cdn.tasteatlas.com/images/toplistarticles/08c818739e4b48ce96d319c16f4cc0ca.jpg?m=facebook",
    cusiness:["Burger","American"],
    rating:"4.2"
},
{
    name:"BURGER KING",
    image:"https://cdn.tasteatlas.com/images/toplistarticles/08c818739e4b48ce96d319c16f4cc0ca.jpg?m=facebook",
    cusiness:["Burger","American"],
    rating:"4.2"
}
]

const RestrauntCard = () =>
{
    return(
       <div className="card">
        <img  src={restaurentList.image} />
        <h2>{buurgerKing.name}</h2>
        <h3>{buurgerKing.cusiness.join(",")}</h3>
        <h4>{buurgerKing.rating} stars</h4>
       </div> 
    )
}


const Body = () =>{
    return (
        <div className="restaurent-list">
                <RestrauntCard/>
                <RestrauntCard/>
                <RestrauntCard/>
                <RestrauntCard/>
                <RestrauntCard/>
                <RestrauntCard/>
                <RestrauntCard/>
                <RestrauntCard/>
                <RestrauntCard/>
                <RestrauntCard/>
                <RestrauntCard/>
                <RestrauntCard/>
                <RestrauntCard/>
                <RestrauntCard/>
                <RestrauntCard/>
                <RestrauntCard/>
        </div>
            
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
