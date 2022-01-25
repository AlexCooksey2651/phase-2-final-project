import React from "react";
import SharkCard from "./SharkCard"

function SharkContainer({ sharks }) {
    const sharkCards = sharks.map(shark => {
        return (
            <SharkCard key={shark.id} shark={shark} />
        )
    })

    return (
        <div className="sharkContainer">
            {sharkCards}
        </div>
    )
}

export default SharkContainer;