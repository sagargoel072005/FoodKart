import ItemList from "./ItemList";
import { useState } from "react";

const RestrauntCategory = ({ data }) => {
    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowItems(!showItems);
    };

    return (
        <div className="rescat">
            <div className="resitem" onClick={handleClick}>
                <span>{data.title} ({data.itemCards.length})</span>
                <span>{showItems ? "⬆️" : "⬇️"}</span>
            </div>
            {showItems && <ItemList items={data.itemCards} />}
        </div>
    );
};

export default RestrauntCategory;
