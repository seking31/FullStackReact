import React from "react";
import "./App.css";

function App() {
  const [articles, setArticles] = React.useState();

  React.useEffect(() => {
    fetch("/articles")
      .then((res) => res.json())
       .then((data) => setArticles([...data]));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      { articles ? articles.map((article, i) => 
      <div>
        <h1>{article.title}</h1>
        <h2>{article.author}</h2>
        <h3>{article.description}</h3>
      </div>) : 'loading'  }
      </header>
    </div>
  );
}

export default App;
