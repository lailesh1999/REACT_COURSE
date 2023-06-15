import {createElement} from "react";
import  ReactDOM  from "react-dom/client";


const heading = createElement(
    "h1",{
            id:"heading1",
            key:"h1"
        }," heading 1  "
        );

const heading1 = createElement(
    "h1",
{
    id : "heading2",
    key:"h2"
},"heading 2" );


const heading2 = (
<h1 id="title" key="h2">HELLO REACT dd</h1>
);


const  container1 = createElement(
    "div",
{
    id:"container",
   // style:{color:"red",backgroundColor:"grey",}
},

[heading,heading1,heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//passing react element inside the  root 
root.render(container1);