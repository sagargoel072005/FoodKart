import { CDN_URL } from "./utils/contants";

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <div className="item-card" key={item.card.info.id}>
          <div className="item-details">
            <h3 className="item-name">{item.card.info.name}</h3>
            <div className="item-price-rating">
              <span className="item-price">₹{item.card.info.defaultPrice / 100}</span>
              {item.card.info.ratings && (
                <span className="item-rating">⭐ {item.card.info.ratings.aggregatedRating.rating} ({item.card.info.ratings.aggregatedRating.ratingCount})</span>
              )}
            </div>
            <p className="item-description">{item.card.info.description}</p>
          </div>
          <div className="item-actions">
            <img className="item-image" src={CDN_URL + item.card.info.imageId} alt={item.card.info.name} />
            <button className="add-button">ADD</button>
            <span className="customisable">Customisable</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
