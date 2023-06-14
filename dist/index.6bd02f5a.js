const heading = React.createElement("h1", {
    id: "heading1"
}, " heading 1  ");
const heading1 = React.createElement("h1", {
    id: "heading2"
}, "heading 2");
const container1 = React.createElement("div", {
    id: "container"
}, [
    heading,
    heading1
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing react element inside the  root 
root.render(container1);

//# sourceMappingURL=index.6bd02f5a.js.map
