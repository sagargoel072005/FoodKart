import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer"; 
import Restaurant1 from "./resCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [listOfRestaurants1, setListOfRestaurants1] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const encodedURL =
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5894431&lng=77.2074614&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
            const fetchURL = `https://api.allorigins.win/get?url=${encodeURIComponent(encodedURL)}`;
            const response = await fetch(fetchURL);
            const json = await response.json();
            console.log("Raw API Response:", json);

            const parsedData = JSON.parse(json.contents);
            console.log("Parsed API Data:", parsedData);
            const restaurants =
                parsedData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            console.log("Extracted Restaurants:", restaurants);

            const restaurants1 =
                parsedData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info || [];
            console.log("extra Restaurants:", restaurants1);

            setListOfRestaurants(restaurants);
            setListOfRestaurants1(restaurants1);
            setFilteredRestaurants(restaurants);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setIsLoading(false);
        }
    };

    const filterTopRated = () => {
        const filteredList = listOfRestaurants.filter((res) => res.info?.avgRating > 4.3);
        setFilteredRestaurants(filteredList);
    };

    const handleSearch = () => {
        const filteredR = listOfRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurants(filteredR);
    };

    const filterPureVeg = () => {
        const filteredList = listOfRestaurants.filter((res) => res.info?.veg === true);
        setFilteredRestaurants(filteredList);
    };

    const filterFastDelivery = () => {
        const filteredList = listOfRestaurants.filter(
            (res) => res.info?.sla?.deliveryTime < 30
        );
        setFilteredRestaurants(filteredList);
    };

    const filterNewRestaurants = () => {
        const filteredList = listOfRestaurants.filter((res) => res.info?.isNewlyOnboarded);
        setFilteredRestaurants(filteredList);
    };

    const filterPriceRange = (min, max) => {
        if (!Array.isArray(listOfRestaurants) || listOfRestaurants.length === 0) return;
    
        const filteredList = listOfRestaurants.filter((res) => {
            let cost = res.info?.costForTwo;
            if (typeof cost === "string") {
                cost = parseInt(cost.replace(/\D/g, ""), 10); // Extract number
            }
            return cost >= min && cost <= max;
        });
    
        setFilteredRestaurants(filteredList);
    };
    
    const filterOffers = () => {
        const filteredList = listOfRestaurants.filter((res) => res.info?.aggregatedDiscountInfoV3);
        setFilteredRestaurants(filteredList);
    };

    const onlineStatus = useOnlineStatus();
    if (!onlineStatus)
        return (
            <h1>Looks like you're offline !! Please check your internet connection</h1>
        );

    return (
        <div className="body">
            <div className="search">
                <input
                    type="text"
                    className="search-box"
                    placeholder="Search Your Restaurant and Food 🔍"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button className="filter-btn" onClick={handleSearch}>Search</button>
            </div>

            <div className="filter">
                <button className="filter-btn" onClick={filterTopRated}>Top Rated Restaurants</button>
                <button className="filter-btn" onClick={filterPureVeg}>Pure Veg</button>
                <button className="filter-btn" onClick={filterFastDelivery}>Fast Delivery</button>
                <button className="filter-btn" onClick={filterNewRestaurants}>New on FoodKart</button>
                <button className="filter-btn" onClick={() => filterPriceRange(300, 600)}>Rs.300-Rs.600</button>
                <button className="filter-btn" onClick={() => filterPriceRange(0, 350)}>Less than Rs.350</button>
                <button className="filter-btn" onClick={filterOffers}>Offers</button>
            </div>

            <div className="h"><p>What's on your mind?</p></div>

            <div className="extra_res">
                {isLoading ? (
                    <Shimmer />
                ) : listOfRestaurants1.length > 0 ? (
                    <>
                        {listOfRestaurants1.map((restaurant, index) => {
                            return (
                                <div key={restaurant?.id || index}>
                                    <Restaurant1 resData={restaurant} />
                                </div>
                            );
                        })}
                    </>
                ) : (
                    <p>No extra restaurants available.</p>
                )}
            </div>
            
            <div className="h"><p>Top Rated Chains</p></div>

            <div className="res-container">
                {isLoading ? (
                    <Shimmer />
                ) : filteredRestaurants.length > 0 ? (
                    filteredRestaurants.map((restaurant) => (
                        <Link to={"/restraunts/" + restaurant.info?.id} key={restaurant.info?.id}>
                            <RestaurantCard resData={restaurant} />
                        </Link>
                    ))
                ) : (
                    <p>No restaurants available.</p>
                )}
            </div>
        </div>
    );
};

export default Body;
