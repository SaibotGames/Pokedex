import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: ${(p) => p.$colour};
  display: flex;
  justify-content: space-between;
  border-radius: 1rem;
  gap: 1rem;

  h3 {
    margin: 1rem;
  }
  p {
    margin: 1rem;
  }
  img {
    margin: 1rem;

    max-height: 5rem;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const StyledGif = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(p) => p.$radius || "5rem"};
  height: ${(p) => p.$radius || "5rem"};
  border-radius: ${(p) => p.$Bradius || ""};
  background-color: ${(p) => p.$colour || "white"};
  overflow: hidden;
  margin: 1rem;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;
