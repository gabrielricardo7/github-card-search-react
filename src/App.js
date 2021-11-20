import React, { useState } from "react";
import Search from "./components/Search";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [repos, setRepos] = useState([]);

  return (
    <div className="App">
      <Search repos={repos} setRepos={setRepos} />
      <ul>
        {repos.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </ul>
      <footer>
        <p>&copy; 2021 Gabriel Ricardo @ Kenzie Academy Brasil</p>
      </footer>
    </div>
  );
}

export default App;
