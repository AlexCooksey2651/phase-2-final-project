import React from "react";

function Search({ handleSearch }) {
    return (
        <div id="sharkSearch">
            <input type="text" placeholder="Search by Name" onChange={(event) => handleSearch(event.target.value)}/>
        </div>
    )
}

export default Search;