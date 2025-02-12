import { useEffect, useState } from "react";
import Shimmer from "./shimmer"; 
import { MENU_API  } from "./utils/contants";
import { useParams } from "react-router";

const RestrauntMenu = () => { 
    const [resInfo , setResInfo ] = useState(null);

    const {resId} =useParams();

    useEffect(() => {
        fetchMenu()
    }, []);


const fetchMenu = async () => {
        const encodedURL = MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER";
        const fetchURL = `https://api.allorigins.win/get?url=${encodeURIComponent(encodedURL)}`;
        const response = await fetch(fetchURL);
        const json = await response.json();
        const parsedData = JSON.parse(json.contents);
        console.log("Parsed API Data:", parsedData);
        console.log(json);
        setResInfo(parsedData);
};
if (resInfo == null ) return <Shimmer />;
const { name, cuisines, costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info || {} ;

const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {} ;
console.log(itemCards);
return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>MENU</h2>
            <ul>
         {itemCards.map((item)=>(
<li>{item.card.info.name} - Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
         ))}
            </ul>
        </div>
    );
};

export default RestrauntMenu;