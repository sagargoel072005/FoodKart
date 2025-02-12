import { CDN_URL } from "./utils/contants";

const RestaurantCard = ({ resData }) => {
  const {
      name,
      avgRating,
      cloudinaryImageId,
      cuisines,
      areaName,
      sla,
      costForTwo,
  } = resData.info || {};

  return (
      <div className="res-card">
          <img
              className="res-logo"
              src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +cloudinaryImageId
              }
              alt={name}
          />
              <h3>{name}</h3>
              <p>{cuisines?.join(", ")}</p>
              <p>{areaName}</p>
                  <span className="span">{avgRating} ⭐</span>
                  <span className="span">{sla.deliveryTime} mins</span>
                  <p>{costForTwo}</p>
              </div> 
  );
};

export default RestaurantCard;

