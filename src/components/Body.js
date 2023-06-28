import { restaurentList } from "../components/constant";
import { RestrauntCard } from "./RestrauntCard";
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

export default Body