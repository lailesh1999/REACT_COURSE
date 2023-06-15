import React from "react";
import  ReactDOM  from "react-dom/client";


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
<h1 id="title" key="h2" className="ctitle">HELLO REACT bross</h1>
);


// const  container1 =React.createElement(
//     "div",
// {
//     id:"container",
//    // style:{color:"red",backgroundColor:"grey",}
// },

// [heading,heading1,heading2]
// );



//functional component 
//function componenets returns jsx
const HeaderCompnonet = () =>{
    return (
    <div>
        <Title/>
        <h1> NAMSTE REACT FIRST VALID FUNCTIONAL ELEMENT </h1>
        <h2>HELLO NAMSTE ITS REACT</h2>
    </div>
    );
};

const HeaderCompnonet1 = () => (
    <div>
        <h1> NAMSTE REACT FIRST VALID FUNCTIONAL ELEMENT </h1>
        <h2>HELLO NAMSTE ITS REACT</h2>
    </div>
);




const root = ReactDOM.createRoot(document.getElementById("root"));
//passing react element inside the  root 
root.render(<HeaderCompnonet></HeaderCompnonet>);
