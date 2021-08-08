import "./SearchBar.css";

const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search for Articles</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search for Articles"
            name="s"
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;
