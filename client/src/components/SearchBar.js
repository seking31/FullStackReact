import "./SearchBar.css";
import React, { useState } from "react";
const axios = require('axios');

function SearchBar({ setArticles }) {
    const [searchQuery, setSearchQuery] = useState(undefined);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/articles', {
            searchQuery: searchQuery,
        })
            .then((data) => setArticles([...data.data]));
    }

    return (
        <div class="wrap">
            <form class="search" method="post" onSubmit={handleSubmit}>
                <input
                    class="searchTerm"
                    value={searchQuery}
                    onInput={e => setSearchQuery(e.target.value)}
                    type="text"
                    id="article-search"
                    placeholder="Search for Articles"
                    name="search"
                />
                <button type="submit" class="searchButton">
                    SEARCH
                </button>
            </form>
        </div>
    )
}

export default SearchBar;
