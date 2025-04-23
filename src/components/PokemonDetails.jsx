import { useLocation } from "react-router-dom";
import { Flex } from "../Style/layout/StyledFlex";
import { StyledDetailsContainer, StyledTables } from "../Style/StyledDetails";
import { getBackgroundColor } from "../utils/ColourFetcher";
import { StyledGif } from "../Style/StyledCard";

const PokemonDetails = () => {
  const location = useLocation();
  const pokemon = location.state?.pokemon || {};
  const backgroundColour = getBackgroundColor(pokemon.types);
  if (!pokemon) {
    return <p>No Pokémon data available. Please go back to the list.</p>;
  }
  console.log(pokemon);
  const capitalizedName = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <Flex
      $dir="column"
      $align="center"
      $height="auto"
      $width="fit-content"
      $margin="auto"
      $background={backgroundColour}
      $radius="8rem"
    >
      <StyledGif $Bradius="50%" $radius="12rem">
        <img
          src={pokemon.sprites.other.showdown.front_default}
          alt={pokemon.name}
        />
      </StyledGif>
      <StyledDetailsContainer $colour={backgroundColour}>
        <StyledTables $colour={backgroundColour}>
          <h1>{capitalizedName(pokemon.name)}</h1>
          <ul className="list-group">
            <li className="list-group-item"># {pokemon.id}</li>
            <li className="list-group-item">Height: {pokemon.height}</li>
            <li className="list-group-item">Weight: {pokemon.weight}</li>
            <li className="list-group-item">
              Type: {pokemon.types.map((type) => type.type.name).join(", ")}
            </li>
          </ul>
        </StyledTables>
        <StyledTables $colour={backgroundColour}>
          <h2>Abilities</h2>
          <ul className="list-group">
            {pokemon.abilities.map((obj, index) => (
              <li className="list-group-item" key={index}>
                {capitalizedName(obj.ability.name)}
              </li>
            ))}
          </ul>
        </StyledTables>
      </StyledDetailsContainer>
    </Flex>
  );
};

export default PokemonDetails;
