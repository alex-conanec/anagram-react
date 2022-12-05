import './App.css';

import { useState } from 'react';

function App() {

  const COUPLES_WORDS = [
    ["manoir", "minora"],
    ["chat", "chien"],
    ["romain", "romani"],
    ["nectar", "carnet"],
    ["encart","cazter"]
  ]

  const getRandomCouple = () => {
    let index_word = Math.floor(Math.random() * COUPLES_WORDS.length)
    return(COUPLES_WORDS[index_word])
  }

  const [words, setWords] = useState(getRandomCouple())

  const newTest = () => {
    setWords(getRandomCouple())
  }


  return (
    <div className="App">
      <h1>Anagram test</h1>
      <p>{words[0]} et {words[1]} sont des anagrammes </p>
      <button 
        onClick={newTest}
      >
        New test
      </button>

    </div>
  );
}

export default App;
