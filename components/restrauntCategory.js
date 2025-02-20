import { useState } from "react";
import ItemList from "./ItemList";

const RestrauntCategory = ({ data, isActive, onClick }) => {
    return (
        <div className="rescat">
            <div className="resitem" onClick={onClick}>
                <span>{data.title} ({data.itemCards.length})</span>
                <span>{isActive ? "⬆️" : "⬇️"}</span>
            </div>
            {isActive && <ItemList items={data.itemCards} />}
        </div>
    );
};

export default RestrauntCategory;
