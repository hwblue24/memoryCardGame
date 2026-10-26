import { useEffect, useState} from 'react'
import './App.css'



function PokemonCard ({pokemonMin, pokemonMax, allChange, setAllChange, pokemonHistory, setPokemonHistory, increment, setScore, score, setBestScore}) { 

  const [pokemon,setPokemon] = useState(null)
  const [pokemonId, setPokemonId] = useState(null)

  function handleClick(pokemonMin, pokemonMax) {
    const randomNum = Math.floor(Math.random() * (pokemonMax - pokemonMin + 1)) + pokemonMin;

    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        setPokemon(response.sprites.other['official-artwork'].front_default)
        setPokemonId(response.id)
        
      })
  }

  useEffect(() => {
    handleClick(pokemonMin, pokemonMax)
  }, [allChange])

  

  return (
    <div onClick={() => {
      setAllChange(!allChange)
      if(pokemonHistory.includes(pokemonId)) {
        setPokemonHistory([])
        setBestScore(score)
        setScore(0)
        
      }else {
        setPokemonHistory([...pokemonHistory, pokemonId])
        increment();
      }
      

    }}>
      <img src={pokemon} />
    </div>
  )
}



function App() {
  const [allChange, setAllChange] = useState(false)
  const [pokemonHistory, setPokemonHistory] = useState([]);
  const [bestScore,setBestScore] = useState(0)

  const [score, setScore] = useState(0)

  function increment () {
    setScore(score+1)
  }


  return (
    <>
       <div className = "parent">
        <PokemonCard
          setPokemonHistory ={setPokemonHistory}
          pokemonHistory={pokemonHistory}
          allChange={allChange}
          setAllChange={setAllChange}
          pokemonMin={1}
          pokemonMax={5}
          setScore={setScore}
          score = {score}
          increment={increment}
          setBestScore = {setBestScore}
          

        />

        <PokemonCard
          setPokemonHistory ={setPokemonHistory}
          pokemonHistory={pokemonHistory}
          allChange={allChange}
          setAllChange={setAllChange}
          pokemonMin={6}
          pokemonMax={10}
          setScore={setScore}
          score = {score}
          increment={increment}
          setBestScore = {setBestScore}

        />


        <PokemonCard
          setPokemonHistory ={setPokemonHistory}
          pokemonHistory={pokemonHistory}
          allChange={allChange}
          setAllChange={setAllChange}
          pokemonMin={11}
          pokemonMax={15}
          setScore={setScore}
          score = {score}
          increment={increment}
          setBestScore = {setBestScore}
          

        />

      </div>

      <h1>Score:{score}</h1>
      <h1>Best Score:{bestScore}</h1>


    </>
    
   

  )
}


export default App



