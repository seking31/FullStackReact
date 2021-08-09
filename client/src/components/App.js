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
    <div className="page-container">
      <div className="content-wrap"></div>
      <SearchBar setArticles={setArticles} />
      {articles ? articles.map((article, i) =>
        <div className="card-body">
          <h2 className="card-title">{article.title}</h2>
          <h2>{article.author}</h2>
          <p className="card-text">{article.description}</p>
          <a href={article.url}>
            <img src={article.urlToImage} alt={article.name} />
          </a>
        </div>
      ) : '...LOADING'}
    </div>
  );
}

export default App;
