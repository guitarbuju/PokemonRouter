import { useEffect, useState } from "react";
import styles from './pokemon.module.css'


const Pokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemon = async () => {
    const fecthData = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await fecthData.json();
    const dadata = data.results;
    

    setPokemonList(dadata);
  };
  useEffect(() => {
    fetchPokemon();
  }, []);
console.log(pokemonList)
  return (
  
  <div>
    <ul className={styles.lista}>
        { pokemonList.map((pokemon,index)=><li key={index}>{pokemon.name}</li>)}
    </ul>
  </div>
)};

export default Pokemon;
