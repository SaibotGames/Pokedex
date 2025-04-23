import styled from "styled-components";

export const StyledList = styled.div`
background-color: ${({ theme }) => theme.background};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
`;