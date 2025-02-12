import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer"; 
import { Link } from "react-router-dom";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    },[]);

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
            console.log(json);
            const restaurants =
                parsedData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            console.log("Extracted Restaurants:", restaurants);
            
            setListOfRestaurants(restaurants);
            setFilteredRestaurants(restaurants);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setIsLoading(false);
        }
    };

    const filterTopRated = () => {
        const filteredList = listOfRestaurants.filter(
            (res) => res.info?.avgRating > 4
        );
        setFilteredRestaurants(filteredList);
    };

    const handleSearch = () => {
        const filteredR = listOfRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurants(filteredR);
    };

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
                <button className="filter-btn" onClick={filterTopRated}>
                    Top Rated Restaurants
                </button>
                <button className="filter-btn">Pure Veg</button>
                <button className="filter-btn">Fast Delivery</button>
                <button className="filter-btn">New on FoodKart</button>
                <button className="filter-btn">Rs.300-Rs.600</button>
                <button className="filter-btn">Less than Rs.300</button>
                <button className="filter-btn">Offers</button>
            </div>

            <div className="res-container">
                {isLoading ? (
                    <Shimmer />
                ) : filteredRestaurants.length > 0 ? (
                    filteredRestaurants.map((restaurant) => (
                        <Link to={"/restraunts/" + restaurant.info?.id}><RestaurantCard
                            key={restaurant.info?.id}
                            resData={restaurant}
                        /></Link>
                    ))
                ) : (
                    <p>No restaurants available.</p>
                )}
            </div>
        </div>
    );
};

export default Body;
