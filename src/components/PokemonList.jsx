import React from "react";
import { usePokeContext } from "../hooks/PokemonContext";
import PokemonCard from "./PokemonCard";
import { StyledList } from "../Style/StyledList";
import { Flex } from "../Style/layout/StyledFlex";

const PokemonList = () => {
  const { loading, error, pokemonList } = usePokeContext();

  return (
    <Flex $margin="3rem">
      {loading ? (
        <p>Loading...</p> // You can swap this with a spinner later
      ) : (
        <StyledList>
          {pokemonList.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </StyledList>
      )}
    </Flex>
  );
};

export default PokemonList;
