import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    transition: all .5s linear;
}
`;
export const lightTheme = {
  body: "#fff",
  text: "#121212",
};

export const darkTheme = {
  body: "#121212",
  text: "#fff",
};
