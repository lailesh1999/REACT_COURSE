import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurentMenu = () =>{
    const params = useParams();

    const [restaurent,setRestaurent] = useState({});
    const {id} = params;
    console.warn(params);
    useEffect(()=>{
        getRestaurentInfo();
    },[]);


    async function getRestaurentInfo() {
     try{
        //https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=%22229%22
        const data = await fetch("https://www.swiggy.com/dapi/menu/other-outlets?menuId=262&lat=12.9351929&lng=77.62448069999999");
        const json = await data.json();
        setRestaurent(json.data);
        if(data.ok){
            throw new Error("Request failed with status " + data.status);
        }
        console.warn(json);
     }catch(error){
        console.error("Error",error.message);
     }
    }
    // how to read dynamic params
    
    return (
        <div>
            <h1>Restraunt id: {}</h1>
            <h2>Namaste</h2>
        </div>
    );
};

export default RestaurentMenu;