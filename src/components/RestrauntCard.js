export const RestrauntCard = ({
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