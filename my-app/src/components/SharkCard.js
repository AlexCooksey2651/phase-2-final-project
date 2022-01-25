import React from "react";

function SharkCard({ shark }) {
    const { image, name, scientific_name, length, weight, conservation_status, fun_fact, learn_more, current_donated } = shark
    return (
        <div className="sharkCard">
            <div className="image">
                <img src={image} alt={name} />
            </div>
            <h2>{name}</h2>
            <div className="information">
                <h4>Scientific Name: {scientific_name}</h4>
                <h4>Average Length: {length}</h4>
                <h4>Average Weight: {weight}</h4>
                <h4>Conservation Status: {conservation_status}</h4>
                <h5>Fun Fact: <br /> {fun_fact}</h5>
                <a href={learn_more}>Learn More</a>
                <h4>Current Donations: {current_donated}</h4>
            </div>
            <button onClick={() => console.log("donate")}>Donate to support the {name}</button>
        </div>
      );
}

export default SharkCard;