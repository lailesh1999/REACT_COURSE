import { restaurentList } from "../components/constant";
import { RestrauntCard } from "./RestrauntCard";
import { useState} from "react";
//props
const Body = () =>{
    //const searchTxt = "KFC";
    //searchText is a local state varibale
    const [searchInput,setSearchInput] = useState("KFC");//return array-array has first element 
    //has vriable name and the second element is setFunction to update the varibale and we call it as state varibale

    return (
    <>
        <div className="search-container">
            <input type="text" className="search-input"  name="dd" placeholder="search" onChange={(e)=>{setSearchInput(e.target.value)}} value={searchInput} />
            <button className="search-btn">SEARCH</button>
        </div>
        <div className="restaurent-list">
            {
                // res is object of restaurentList for exmpale resturentList[0] as one object and resturentList[1] is second object
                restaurentList.map((res,index) => {
                    return <RestrauntCard  {...res} key={index} />;
                })}
                
        </div>
    </>  
    );
};

export default Body