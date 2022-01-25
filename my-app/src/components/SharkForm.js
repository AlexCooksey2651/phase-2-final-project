import React, { useState } from "react";

function SharkForm() {
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
    return (
        <div className="formContainer">
            <form className="sharkForm">
            <br />
            <label>
                Name:
                <br />
                <input
                type="text"
                name="name"
                placeholder="Shark Name"
                onChange={(e) => console.log(e.target.value)}
                />
            </label>
            <br />
            <label>
                Image:
                <br />
                <input
                type="text"
                name="image"
                placeholder="Image URL"
                onChange={(e) => console.log(e.target.value)}
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
                onChange={(e) => console.log(e.target.value)}
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
                onChange={(e) => console.log(e.target.value)}
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
                onChange={(e) => console.log(e.target.value)}
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
                onChange={(e) => console.log(e.target.value)}
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
                onChange={(e) => console.log(e.target.value)}
                />
            </label>
            <br />
            <label>
                Current Amount Donated:
                <br />
                <input
                type="number"
                name="current_donated"
                placeholder="$0"
                onChange={(e) => console.log(e.target.value)}
                />
            </label>
            <br />
            <br />
            <br />
            <br />
            <button type="submit">Add Shark</button>
            </form>
        </div>
      );
}

export default SharkForm;