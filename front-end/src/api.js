export const getPokemons = async () => {
    let offset = Math.floor(Math.random() * 1000)

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=6m&offset=${offset}`)
    const data = await response.json()
    return data
}

export const getPokemonsData = async (url) => {
    const data = await fetch(url)
    const result = await data.json()
    return result
}

export const buscarPokemon = async (pokemon) => {
    try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
    } catch (err) {}
};