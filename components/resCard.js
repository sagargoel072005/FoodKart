const Restaurant1 = ({ resData }) => {
    if (!resData) return null; // Prevent errors if data is empty

    const { action, imageId } = resData; // Extract action (for link) & imageId (for image)
    const imageUrl = imageId
        ? `https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`
        : "https://via.placeholder.com/150"; // Fallback image

    return (
        <div className="restaurant-card">
            <a href={action?.link} target="_blank" rel="noopener noreferrer">
                <img src={imageUrl} alt={action?.text || "Restaurant"} />
            </a>
        </div>
    );
};

export default Restaurant1;
