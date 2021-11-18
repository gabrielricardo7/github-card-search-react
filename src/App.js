import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import Card from "./components/Card";
import api from "./services/api";
import "./App.css";

function App() {
  const [repos, setRepos] = useState([]);
  const [owner, setOwner] = useState("");
  const [repo, setRepo] = useState("");

  useEffect(() => {
    api
      .get(`/repos/${owner}/${repo}`)
      .then((response) => setRepos(response.data))
      .catch((err) => {
        console.error("Ops! Ocorreu um erro: " + err);
      });
  }, [owner, repo]);

  console.log(repos);

  return (
    <div className="App">
      <Search setRepos={setRepos} setOwner={setOwner} setRepo={setRepo} />
      <Card repos={repos} />
    </div>
  );
}

export default App;
