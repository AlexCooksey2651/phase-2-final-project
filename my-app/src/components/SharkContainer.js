import React from "react";
import SharkCard from "./SharkCard"
import Search from "./Search"

function SharkContainer({ sharks, changeDonationAmount, handleSearch }) {
    const sharkCards = sharks.map(shark => {
        return (
            <SharkCard key={shark.id} shark={shark} changeDonationAmount={changeDonationAmount}/>
        )
    })

    return (
        <div className="sharkContainer">
            <Search handleSearch={handleSearch}/>
            {sharkCards}
        </div>
    )
}

export default SharkContainer;