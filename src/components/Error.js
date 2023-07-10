import { useRouteError } from "react-router-dom";



const Error = () =>{
    const rr = useRouteError();
    console.log(rr);
    console.warn("nghfgf",rr)
    return(
        <div>
            <h1>OOPS !!!</h1>
            <h3>SOME THING WENT WRONG</h3>
            <h2>{rr.status + " : " + rr.statusText }</h2>
        </div>
    );
};

export default Error;