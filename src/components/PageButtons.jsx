import React, { useContext } from "react";
import { usePokeContext } from "../hooks/PokemonContext";
import { Flex, StyledButton } from "../Style/layout/StyledFlex";

const PageButtons = () => {
  const { currentPage, setCurrentPage, loading } = usePokeContext();

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };
  return (
    <Flex $gap="1rem" $margin="2rem">
     
      
      <StyledButton onClick={handlePreviousPage} disabled={currentPage === 1 ||loading}>
        Previous page
      </StyledButton>
      <StyledButton onClick={handleNextPage} disabled={ loading}>
        Next page
      </StyledButton>
    </Flex>
  );
};

export default PageButtons;
