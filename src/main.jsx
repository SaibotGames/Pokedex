import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PokemonProvider } from "./hooks/PokemonContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PokemonProvider initialPage={1} initialPageSize={12}>
      <App />
    </PokemonProvider>
  </StrictMode>
);
