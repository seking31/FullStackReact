import "./SearchBar.css";
const axios = require('axios');

const SearchBar = ({ searchQuery, setSearchQuery, setArticles }) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/articles', {
            searchQuery: searchQuery,
        })
            .then((data) => setArticles([...data.data]));
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <input
                value={searchQuery}
                onInput={e => setSearchQuery(e.target.value)}
                type="text"
                id="article-search"
                placeholder="Search for Articles"
                name="search"
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar;
