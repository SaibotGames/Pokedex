import React from "react";
import { Link } from "react-router-dom";
import { usePokeContext } from "../hooks/PokemonContext";

const Pages = () => {
  const { setCurrentPage } = usePokeContext();
  const handleOnHome = () => {
    setCurrentPage(1);
  };
  return (
    <div>
      <Link
        to="/"
        style={{ textDecoration: "none", color: "white" }}
        onClick={handleOnHome}
      >
        Home{" "}
      </Link>
      <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
        About
      </Link>
    </div>
  );
};

export default Pages;
