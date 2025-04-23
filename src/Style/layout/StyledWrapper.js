import styled from "styled-components";

export const StyledWrapper = styled.div`
background-color: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  width: '100vw';
  height: '100vh';
`;