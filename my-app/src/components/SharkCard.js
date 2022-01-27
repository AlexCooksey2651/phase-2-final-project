import React, { useState } from "react";

function SharkCard({ shark, changeDonationAmount }) {
    const { id, image, name, scientific_name, length, weight, conservation_status, fun_fact, learn_more, current_donated } = shark
    const [formData, setFormData] = useState(shark)

    function handleDonationChange(event) {
        setFormData({
            ...formData,
            current_donated: parseInt(current_donated) + parseInt(event.target.value)
        })
    }

    function handleUpdateDonation(event) {
        event.preventDefault()
        fetch(`http://localhost:3000/sharks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(updatedShark => changeDonationAmount(updatedShark))
    }

    return (
        <div className="sharkCard">
            <div className="image">
                <img src={image} alt={name} />
            </div>
            <h2>{name}</h2>
            <div className="information">
                <h4>Scientific Name: {scientific_name || "More information needed"}</h4>
                <h4>Average Length: {length || "More information needed"}</h4>
                <h4>Average Weight: {weight || "More information needed"}</h4>
                <h4>Conservation Status: {conservation_status || "More information needed"}</h4>
                <h4>Fun Fact: {fun_fact || "More information needed"}</h4>
                <a href={learn_more}>{learn_more ? "Learn More" : null}</a>
                <h4>Current Donations: ${current_donated}</h4>
            </div>
            <form className="donation" onSubmit={handleUpdateDonation}>
                <button type="submit">Donate to support the {name}</button>
                <input type="number" name="donation" placeholder="Enter donation amount" onChange={handleDonationChange}/>
            </form>
        </div>
      );
}

export default SharkCard;