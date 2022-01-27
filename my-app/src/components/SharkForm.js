import React, { useState } from "react";
const initialState = {
    name: "",
    image: "",
    scientific_name: "",
    length: "",
    weight: "",
    conservation_status: "",
    fun_fact: "",
    learn_more: "",
    current_donated: 0,
}   

function SharkForm({ addShark }) {
    
    const [formData, setFormData] = useState(initialState)

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
                value={formData.name}
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
                value={formData.image}
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
                value={formData.scientific_name}
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
                value={formData.length}
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
                value={formData.weight}
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
                value={formData.conservation_status}
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
                value={formData.fun_fact}
                onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Learn More:
                <br />
                <input
                type="text"
                name="learn_more"
                placeholder="Learn More URL"
                value={formData.learn_more}
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
                value={formData.current_donated}
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