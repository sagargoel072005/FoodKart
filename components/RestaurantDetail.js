import { useLocation } from "react-router-dom";

const RestaurantDetail = () => {
    const location = useLocation();
    const { resData } = location.state || {}; // Get passed data

    if (!resData) {
        return <h2>Restaurant not found</h2>;
    }

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>{resData.action?.text || "Restaurant Details"}</h1>
            <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/${resData.imageId}`}
                alt={resData.action?.text || "Restaurant"}
                style={{ width: "300px", borderRadius: "10px" }}
            />
            <p>More details about the restaurant...</p>
        </div>
    );
};

export default RestaurantDetail;
