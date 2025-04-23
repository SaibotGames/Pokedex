import React from "react";
import PokemonList from "./PokemonList";
import PageButtons from "./PageButtons";
import { Flex } from "../Style/layout/StyledFlex";

const Pokedex = () => {
  return (
    <Flex  $dir="column" $align="center">
      <PokemonList />
      <PageButtons />
    </Flex>
  );
};

export default Pokedex;
