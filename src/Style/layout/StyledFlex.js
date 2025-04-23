import styled from "styled-components";


export const Flex = styled.div`
background-color: ${({ theme, $background }) => $background || theme.background};
  display: flex;
  justify-content: ${(p) => p.$justify || "flex-start"};
  align-items: ${(p) => p.$align || "stretch"};
  gap: ${(p) => p.$gap || "0"};
  overflow: ${(p) => p.$overflow || "auto"};
  height: ${(p) => p.$height || "auto"};
  flex-direction: ${(p) => p.$dir || "row"};
  width: ${(p) => p.$width || "auto"};
  overflow-x: hidden;
  margin: ${(p) => p.$margin || "0"};
  border-radius: ${(p) => p.$radius || "0"} ;
  
  
`;

export const StyledButton = styled.button`
background-color: ${({ theme, $background }) => $background || theme.nav};
border-radius: 3rem;
&:hover{
  background-color: white;
  color: grey;
}
`