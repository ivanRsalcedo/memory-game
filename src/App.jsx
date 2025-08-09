import { useState } from 'react';
import { useEffect } from 'react';
import { getRandomPokemons } from './lib/api';
import shuffle from './lib/shuffle';
import './App.css'
import Card from './components/Card';
import CardGrid from './components/CardGrid';
import Scoreboard from './components/Scoreboard';
import { FiRefreshCw } from 'react-icons/fi';

const GRID_SIZE = 9;

function App() {

  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);
  const [chosen, setChosen] = useState([]);

  useEffect(() => {
    resetGame();
  }, []);

  function handleCardClick(id) {
    if (!chosen.includes(id)) {
      setChosen(prevChosen => [...prevChosen, id]);

      setScore(prevScore => {
        const updatedScore = prevScore + 1;
        if (updatedScore === 9) {
          resetGame();
          alert('You won!');
        }
        return updatedScore;
      });

      setPokemonList(prevList => shuffle(prevList));
    }
    else {
      if (score > best) setBest(score);
      setScore(0);
      setChosen([]);
      resetGame();
      alert('You lost!');
    }
  }

  async function resetGame() {
    const data = await getRandomPokemons(GRID_SIZE);
    setPokemonList(shuffle(data));
    setScore(0);
  }

  return (
    <div className='container'>
      <h1>Memory Game</h1>
      <Scoreboard score={score} best={best} />
      <button
        className='refresh-button'
        onClick={resetGame}>
        <FiRefreshCw />
      </button>
      <CardGrid
        items={pokemonList}
        onCardClick={handleCardClick}
        renderCard={(p, onCardClick) => (
          <Card key={p.id} id={p.id} img={p.imageUrl} name={p.name} onClick={onCardClick} />
        )}
      />
    </div>
  );
}

export default App