import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Pokedex from "./components/Pokedex";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./components/NavBar";
import { StyledWrapper } from "./Style/layout/StyledWrapper";
import PokemonDetails from "./components/PokemonDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./Style/Theme";
import About from "./components/About";

function App() {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <StyledWrapper>
        <Router basename="/Pokedex">
          <NavBar toggle={toggleTheme} isDark={isDark} />
          <Routes>
            <Route path="/" element={<Pokedex />} />
            <Route path="/pokemon/:name" element={<PokemonDetails />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </StyledWrapper>
    </ThemeProvider>
  );
}

export default App;
