import { useContext, createContext, useEffect, useState } from "react";
import { fetchPokemonUrlList } from "../utils/PokemonUrlListFetcher";
import { fetchPokemonDetails } from "../utils/PokemonDetailsFetcher";
import { fetchByName } from "../utils/PokemonFetchByName";

const PokemonContext = createContext();

const PokemonProvider = ({ children, initialPage, initialPageSize }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchedPokemon, setSearchedPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setCurrentPageSize] = useState(12);


  useEffect(() => {
    if (!searchedPokemon) return;

    const fetchSearch = async () => {

      setLoading(true);
      setError(null);
      try {

        const pok = await fetchByName(searchedPokemon);


        if (!pok) {
          setError("No Pokémon found.");
          setPokemonList([]);
          return;
        }
        setPokemonList([pok]);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSearch();
  }, [searchedPokemon]);
  useEffect(() => {
    const fetchPage = async () => {
      setError(null);
      setLoading(true);

      try {
        const pokemonUrls = await fetchPokemonUrlList(currentPage, pageSize);
        console.log("lalal");
        const pl = await fetchPokemonDetails(pokemonUrls);
        setPokemonList(pl);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [currentPage, pageSize]);
  return (
    <PokemonContext.Provider
      value={{
        pokemonList,
        loading,
        error,
        currentPage,
        pageSize,
        setCurrentPage,
        setCurrentPageSize,
        searchedPokemon,
        setSearchedPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

const usePokeContext = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error("usePokeContext must be used within a PokemonProvider");
  }
  return context;
};
export { PokemonProvider, usePokeContext };
export default PokemonContext;
