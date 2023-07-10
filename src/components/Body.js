import { restaurentList } from "../components/constant";
import { RestrauntCard } from "./RestrauntCard";
import { useState,useEffect} from "react";
//props
import Shimmer from "./ShimmerUI";

function filterData(searchInput,restaurents){
   const filterData1 =  restaurents.filter((res) => res.name.toLowerCase().includes(searchInput.toLowerCase()));
   //includes(searchInput));
        return filterData1;
}
const Body = () =>{
    //const searchTxt = "KFC";
    //searchText is a local state varibale

    const[allRestaurents,setAllRestauranrs] = useState(restaurentList);
    const [searchInput,setSearchInput] = useState("");//return array-array has first element 
    //has vriable name and the second element is setFunction to update the varibale and we call it as state varibale
    const[filteredrestaurents,setFilteredRestaurents]  = useState(restaurentList);
     /// empty dependency array called once after the render;
     // dep array [searchInput] => once after intial render and evry time after re-render when my search txt changes 
        useEffect(()=>{
            ///console.log("call this when dependency is changed");
           // getRestraunts();   
        },[]);

        async function getRestraunts(){
            const data = await  fetch("https://api.publicapis.org/entries");
            const json = await data.json();
            console.log(json);
            //optional chaining 
        }

        //conditional Rendering 
        //if restraunt is empty => shimmer ui
        // if restraunt has data => actual data UI 
        // not render component

        if(!allRestaurents) return null;

    if(filteredrestaurents?.length === 0) return(<h1>NO MATCH FOUND</h1>)


    return (allRestaurents.length === 0)?(<Shimmer/>):(
    <>
        <div className="search-container">
            <input type="text" name="dd" className="search-input"  placeholder="search" onChange={(e)=>{setSearchInput(e.target.value)}} value={searchInput} />
            <button className="search-btn"  onClick={()=>{
                //need to filter
                //update the state - restaurent
                //filterDATA()
               const data =  filterData(searchInput,allRestaurents);
               setFilteredRestaurents(data);
            }}>SEARCH</button>
        </div>
        <div className="restaurent-list">
            {

                // res is object of restaurentList for exmpale resturentList[0] as one object and resturentList[1] is second object
                filteredrestaurents.map((res,index) => {
                    return <RestrauntCard  {...res} key={index} />;
                })}
                
        </div>
    </>  
    );
};

export default Body