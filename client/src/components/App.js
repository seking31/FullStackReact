import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";

function App() {
  const [articles, setArticles] = useState(undefined);

  React.useEffect(() => {
    if (articles === undefined) {
      axios
        .get("/articles")
        .then((data) => setArticles([...data.data]));
    }
  }, []);

  return (
    <div className="container">
      <SearchBar setArticles={setArticles} />
      <div className="content-section">
        {articles ? articles.map((article, i) =>
          <div className="card">
            <a href={article.url}>
              <img src={article.urlToImage} alt={article.name} />
            </a>
            <h4 className="card-title">{article.title}</h4>
            <h3>{article.author}</h3>
            <p className="card-text">{article.description}</p>
          </div>
        ) : '...LOADING'}
      </div>
    </div>
  );
}

export default App;
