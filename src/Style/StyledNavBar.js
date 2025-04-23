import styled from "styled-components";

export const StyledNavContainer = styled.div`
  background-color: ${({ theme }) => theme.nav};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15%;
  border-radius: 1rem;
  margin-bottom: 1rem;
  border: 1px solid;
  padding: 2rem;

  @media screen and (max-width: 745px) {
    width: 100%;
    flex-direction: column;
    margin-bottom: 5rem;
    height: fit-content;
  }
`;

export const StyledSearchForm = styled.form`
  background-color: ${({ theme }) => theme.background};

  input {
    background-color: ${({ theme }) => theme.background};
    padding: 0.5rem;
    font-size: 1rem;
    flex: 1;
  }

  button {
    background-color: ${({ theme }) => theme.background};
    border: none;
    cursor: pointer;
  }
`;
