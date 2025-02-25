import { useNavigate } from "react-router-dom";

const Restaurant1 = ({ resData }) => {
    if (!resData) return null; 

    const navigate = useNavigate();
    const { action, imageId } = resData; 
    const imageUrl = imageId
        ? `https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`
        : "https://via.placeholder.com/150";

    const handleClick = () => {
        navigate(`/restaurant/${resData.id}`, { state: { resData } }); // Passing restaurant data
    };

    return (
        <div className="restaurant-card" onClick={handleClick} style={{ cursor: "pointer" }}>
            <img src={imageUrl} alt={action?.text || "Restaurant"} />
        </div>
    );
};

export default Restaurant1;
