import React from "react";
import SharkCard from "./SharkCard"

function SharkContainer({ sharks, changeDonationAmount }) {
    const sharkCards = sharks.map(shark => {
        return (
            <SharkCard key={shark.id} shark={shark} changeDonationAmount={changeDonationAmount}/>
        )
    })

    return (
        <div className="sharkContainer">
            {sharkCards}
        </div>
    )
}

export default SharkContainer;