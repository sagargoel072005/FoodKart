import Shimmer from "./shimmer";
import { useEffect, useState } from "react";
import { MENU_API } from "./utils/contants";
import { useParams } from "react-router";
import RestrauntCategory from "./restrauntCategory";

const RestrauntMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

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
        setResInfo(parsedData);
    };
    if (resInfo == null) return <Shimmer />;
    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info || {};

    const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};
    console.log(itemCards);
    console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || {});
    const itemCategory = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
            c.card?.card?.["@type"] ==
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(itemCategory);
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            {itemCategory.map((category) => (
                <RestrauntCategory key={category?.card?.card.title} data={category?.card?.card} />
            ))}
        </div>
    );
};

export default RestrauntMenu;