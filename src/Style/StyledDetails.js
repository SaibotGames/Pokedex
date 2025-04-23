import styled from "styled-components";

export const StyledDetailsContainer = styled.div`
  background-color: ${(p) => p.$colour || "f0f0f0"};
  display: flex;
  justify-content: space-around;
  width: 80vw;
  border-radius: 7rem;
  height: 25rem;
  margin: 1rem;

  ul {
    margin: 1rem;
  }
  h1 {
    margin: 1rem;
    color: white;
  }
  h2 {
    margin: 1rem;
    color: white;
  }
`;

export const StyledTables = styled.div`
  display: flex;
  flex-direction: column;

  li {
    background-color: ${(p) => p.$colour || "f0f0f0"};
    color: aliceblue;
  }
`;
