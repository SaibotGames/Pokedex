import React, { useState } from "react";
import { usePokeContext } from "../hooks/PokemonContext";

const PokemonSearch = () => {
  const { setSearchedPokemon, setCurrentPage } = usePokeContext();
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = async (e) => {
    await setCurrentPage(1000);
    e.preventDefault();
    setSearchedPokemon(text);
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search pokemon.."
        value={text}
        onInput={handleInputChange}
      />
      <button type="submit">
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
};

export default PokemonSearch;
