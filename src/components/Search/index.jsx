import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import api from "../../services/api";
import "./styles.css";

const Search = ({ repos, setRepos }) => {
  const [value, setValue] = useState("");
  const [owner, setOwner] = useState("");
  const [repo, setRepo] = useState("");

  useEffect(() => {
    const arr = value.split("/");
    setOwner(arr[0]);
    setRepo(arr[1]);
  }, [value]);

  function searchRepo() {
    if (value.length === 0 || !value.trim()) {
      toast.error("nome-do-usuário/repositório");
    } else {
      api
        .get(`/repos/${owner}/${repo}`)
        .then((response) => {
          if (repos.find((repo) => repo.id === response.data.id)) {
            toast.success("Repositório já listado!");
          } else {
            setRepos([...repos, response.data]);
            toast.success("Repositório encontrado!");
            setValue("");
          }
        })
        .catch((err) => {
          toast.error("Erro na busca do repositório.");
          console.error("Ops! Ocorreu um erro: " + err);
        });
    }
  }

  return (
    <>
      <form action="" method="get" onSubmit={(event) => event.preventDefault()}>
        <input
          onChange={(event) => setValue(event.target.value)}
          placeholder="Digite o nome do repositório"
          type="text"
          value={value}
        />
        <button onClick={() => searchRepo()} type="submit">
          Pesquisar
        </button>
        <Toaster />
      </form>
    </>
  );
};

export default Search;
