const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export const fetchByName = async (name) => {
  if (!name) return;


  const url = `${baseUrl}/${name}`;


  try {
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch Pokémon");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
    return null; // so context can handle it
  }
};
