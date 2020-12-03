import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body, a{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    transition: all .5s linear;
}
`;
export const lightTheme = {
  body: "#f4f4f4",
  text: "#fffff",
};

export const darkTheme = {
  body: "#151618",
  text: "#f4f4f4",
};
