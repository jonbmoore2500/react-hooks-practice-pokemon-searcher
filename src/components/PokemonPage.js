import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonArr, setPokemonArr] = useState([])
  const [pokemonHelper, setPokemonHelper] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(r => r.json())
    .then(data => {
      setPokemonArr(data)
      setPokemonHelper(data)
    })
  }, [])
  
  function handleFilter(searchText) {
    const filteredPokemonArr = pokemonHelper.filter((pokemon) => pokemon.name.slice(0, searchText.length) === searchText.toLowerCase())
    setPokemonArr(filteredPokemonArr)
  }


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search handleFilter={handleFilter}/>
      <br />
      <PokemonCollection pokemonArr={pokemonArr}/>
    </Container>
  );
}

export default PokemonPage;
