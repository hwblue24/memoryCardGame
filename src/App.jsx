import { useEffect, useState} from 'react'
import './App.css'

function PokemonCard ({pokemonMin, pokemonMax, allChange, setAllChange}) { 

  const [pokemon,setPokemon] = useState(null)

  
    function handleClick (pokemonMin,pokemonMax) {
      const randomNum = Math.floor(Math.random() * (pokemonMax - pokemonMin + 1)) + pokemonMin;
      
      fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
      .then(function(response) {
        return response.json ();
      })
      .then(function(response) {
        console.log(response)
        setPokemon(response.sprites.other['official-artwork'].front_default)
        
      })

    }

    useEffect(()=>{
      handleClick(pokemonMin,pokemonMax)
    },[allChange])

    return (
    <div onClick={()=> {
      setAllChange(!allChange)
    }}>
      <img src = {pokemon} /> 
    </div>
  )
}

function App() {
  const [allChange, setAllChange] = useState(false)

  return (
    <div>
      <PokemonCard 
        allChange = {allChange}
        setAllChange = {setAllChange}
        pokemonMin = {1}
        pokemonMax = {5}
        
      />

      <PokemonCard 
        allChange = {allChange}
        setAllChange = {setAllChange}
        pokemonMin = {6}
        pokemonMax = {10}
        
      />

      
    </div>
    
  ) 
}


export default App



