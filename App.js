import React from "react";
import  ReactDOM  from "react-dom/client";


const heading = React.createElement(
    "h1",{
            id:"heading1",
            key:"h1"
        }," heading 1  "
        );

const heading1 = React.createElement(
    "h1",
{
    id : "heading2",
    key:"h2"
},"heading 2" );

const  container1 = React.createElement(
    "div",
{
    id:"container",
   // style:{color:"red",backgroundColor:"grey",}
},
[heading]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing react element inside the  root 
root.render(container1);