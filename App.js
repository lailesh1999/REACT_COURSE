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
    name:"PIZZA",
    image:"https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1080,h_720,x_100,y_0,c_crop",
    cusiness:["PIZZA","American"],
    rating:"4.2"
},
{
    name:"AAAA",
    image:"https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg",
    cusiness:["Burger","American"],
    rating:"5.2"
},
{
    name:"AAAA",
    image:"https://cdn.tasteatlas.com/images/toplistarticles/08c818739e4b48ce96d319c16f4cc0ca.jpg?m=facebook",
    cusiness:["Burger","American"],
    rating:"5.2"
},
{
    name:"AAAA",
    image:"https://cdn.tasteatlas.com/images/toplistarticles/08c818739e4b48ce96d319c16f4cc0ca.jpg?m=facebook",
    cusiness:["Burger","American"],
    rating:"5.2"
},
{
    name:"AAAA",
    image:"https://cdn.tasteatlas.com/images/toplistarticles/08c818739e4b48ce96d319c16f4cc0ca.jpg?m=facebook",
    cusiness:["Burger","American"],
    rating:"5.2"
}
];
const RestrauntCard = ({
    image,
    name,
    cusiness,
    rating}) =>
{
    //destructure ...
   // const {image,name,cusiness,rating} = restaurent;
    console.log(props);
    return(
       <div className="card">
        <img  src={image} />
        <h2>{name}</h2>
        <h3>{cusiness}</h3>
        <h4>{rating} stars</h4>
       </div> 
    )
}

//props
const Body = () =>{
    return (
        <div className="restaurent-list">
            {
                // res is object of restaurentList for exmpale resturentList[0] as one object and resturentList[1] is second object
                restaurentList.map((res,index) => {
                    return <RestrauntCard  {...res} key={index} />;
                })}
                
        </div>
            
    );
};

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
