import "./SearchBar.css";
import React, { useState } from "react";
const axios = require('axios');

function SearchBar({ setArticles }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/articles', {
            searchQuery: searchQuery,
        })
            .then((data) => setArticles([...data.data]))
            .catch((error) =>
                console.log(error.response.data)
            );
    }

    return (
        <div className="wrap">
            <form className="search" method="post" onSubmit={handleSubmit}>
                <input
                    className="searchTerm"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    type="text"
                    placeholder="Search for Articles"
                />
                <button type="submit" className="searchButton">
                    SEARCH
                </button>
            </form>
        </div>
    )
}

export default SearchBar;
