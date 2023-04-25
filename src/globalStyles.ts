import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fontFamily.primary};
    background: ${({ theme }) => theme.palette.background};
    text-decoration: none;
  }
`;
