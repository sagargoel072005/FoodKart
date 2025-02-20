import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./shimmer";
import RestrauntCategory from "./RestrauntCategory";
import { MENU_API } from "./utils/contants";

const RestrauntMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(null);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const encodedURL = `${MENU_API}${resId}&catalog_qa=undefined&submitAction=ENTER`;
                const fetchURL = `https://api.allorigins.win/get?url=${encodeURIComponent(encodedURL)}`;
                const response = await fetch(fetchURL);
                const json = await response.json();
                const parsedData = JSON.parse(json.contents);
                console.log("Parsed API Data:", parsedData);
                setResInfo(parsedData);
            } catch (error) {
                console.error("Error fetching menu:", error);
            }
        };

        fetchMenu();
    }, [resId]); // Ensures fetching happens when `resId` changes

    if (!resInfo) return <Shimmer />;

    const { name, cuisines = [], costForTwoMessage = "" } =
        resInfo?.data?.cards?.[2]?.card?.card?.info || {};

    const itemCategories = resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            {itemCategories.map((category, index) => (
                <RestrauntCategory
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    isActive={index === activeCategoryIndex}
                    onClick={() => setActiveCategoryIndex(index === activeCategoryIndex ? null : index)}
                />
            ))}
        </div>
    );
};

export default RestrauntMenu;
