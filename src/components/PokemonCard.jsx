import React from "react";
import { StyledCard, StyledGif } from "../Style/StyledCard";
import { getBackgroundColor } from "../utils/ColourFetcher";
import { Flex } from "../Style/layout/StyledFlex";
import { Link } from "react-router-dom";
import { usePokeContext } from "../hooks/PokemonContext";

const PokemonCard = ({ pokemon }) => {
  const backgroundColour = getBackgroundColor(pokemon.types);

  const capitalizedName = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Link
      to={`/pokemon/${pokemon.name}`}
      state={{ pokemon }}
      className="link"
      style={{ textDecoration: "none", color: "white" }}
    >
      <StyledCard $colour={backgroundColour}>
        
          <div>
            <p># {pokemon.id}</p>
            <h3>{capitalizedName(pokemon.name)}</h3>
          </div>
          <StyledGif $colour={backgroundColour}>
            <img
              src={pokemon.sprites.other.showdown.front_default}
              alt={pokemon.name}
            />
          </StyledGif>
        
      </StyledCard>
    </Link>
  );
};

export default PokemonCard;
