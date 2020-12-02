import React, { createContext, useEffect, useState } from "react";
import { Content } from "../src/darkmode/components/Content";

import { useDarkMode } from "../src/darkmode/style/useDarkMode";
import { Toggle } from "../src/darkmode/components/Toggle";
import {
  GlobalStyles,
  lightTheme,
  darkTheme,
} from "../src/darkmode/style/globalStyle";
import styled, { ThemeProvider } from "styled-components";



import axios from "axios";
import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import "./app.css";

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <NewsContextProvider>
      <ThemeProvider theme={themeMode}> 
      <GlobalStyles />
      <Toggle theme={theme} toggleTheme={toggleTheme} />
        <News />
      </ThemeProvider>
        
    </NewsContextProvider>
  );
}

export default App;
