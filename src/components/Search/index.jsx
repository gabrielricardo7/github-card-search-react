import React, { useState } from "react";

const Search = ({ setOwner, setRepo }) => {
  const [value, setValue] = useState("");

  function searchRepo(value) {
    if (value.length) {
      const arr = value.split("/");
      setOwner(arr[0]);
      setRepo(arr[1]);
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
        <button onClick={() => searchRepo(value)} type="submit">
          Pesquisar
        </button>
      </form>
    </>
  );
};

export default Search;
