import React, { useState } from "react";

function SharkForm({ addShark }) {
    const [formData, setFormData] = useState(
        {
            "name": "More Information Needed",
            "image": "More Information Needed",
            "scientific_name": "More Information Needed",
            "length": "More Information Needed",
            "weight": "More Information Needed",
            "conservation_status": "More Information Needed",
            "fun_fact": "More Information Needed",
            "learn_more": "More Information Needed",
            "current_donated": 0,
        }
    )

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:3000/sharks', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(newShark => addShark(newShark))
    }

    return (
        <div className="formContainer">
            <form className="sharkForm" onSubmit={handleSubmit}>
            <br />
            <label>
                Name:
                <br />
                <input required
                type="text"
                name="name"
                placeholder="Shark Name"
                onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Image:
                <br />
                <input required
                type="text"
                name="image"
                placeholder="Image URL"
                onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Scientific Name:
                <br />
                <input
                type="text"
                name="scientific_name"
                placeholder="Scientific Name"
                onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Length:
                <br />
                <input
                type="text"
                name="length"
                placeholder="Average Length"
                onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Weight:
                <br />
                <input
                type="text"
                name="weight"
                placeholder="Average Weight"
                onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Conservation Status:
                <br />
                <input
                type="text"
                name="conservation_status"
                placeholder="Conservation Status"
                onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Fun Fact:
                <br />
                <input
                type="text"
                name="fun_fact"
                placeholder="Fun Fact"
                onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Current Amount Donated:
                <br />
                <input required
                type="number"
                name="current_donated"
                placeholder="$0"
                onChange={handleChange}
                />
            </label>
            <br />
            <br />
            <br />
            <button type="submit" >Add Shark</button>
            </form>
        </div>
      );
}

export default SharkForm;