import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";

function App() {
  const [articles, setArticles] = useState(undefined);
  const [searchQuery, setSearchQuery] = useState();

  React.useEffect(() => {
    if (articles === undefined) {
      axios
        .get("/articles")
        .then((data) => setArticles([...data.data]));
    }
  }, []);

  return (
    <div className="page-container">
      <div className="content-wrap"></div>
      <header className="header-container">
        <SearchBar searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setArticles={setArticles}
        />
      </header>
      {articles ? articles.map((article, i) =>
        <div className="box-container">
          <div className="card-body">
            <h2 className="card-title">{article.title}</h2>
            <h2>{article.author}</h2>
            <p className="card-text">{article.description}</p>
            <a href={article.url}>
              <img src={article.urlToImage} alt={article.name} />
            </a>
          </div>
        </div>) : '...LOADING'}

    </div>
  );
}

export default App;
