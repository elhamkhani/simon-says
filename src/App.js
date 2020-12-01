import React, { useState , useEffect } from 'react';
import './App.css';
import Box from './components/box';

function App() {
  
  const [sequence, setSequence] = useState([]);
  const [currentSelection, setCurrentSelection] = useState(0);
  const level = sequence.length;
  
  useEffect(() => {
    if (currentSelection > 0 && currentSelection <= sequence.length ) {
      const timerId = setTimeout(() => {
        const newSelection = currentSelection + 1;
        setCurrentSelection(newSelection);
      }, 1000);
      return () => clearTimeout(timerId);
    }else{
      setCurrentSelection(0);
    } 

  });

  const newRound = () => {
    const next = Math.floor(Math.random() * 4) + 1;
    const newSequence = sequence.concat(next);
    setSequence(newSequence);
    setCurrentSelection(1);
  };
  
  return (
      <div className="App">
        <button onClick={newRound}>New Round</button>
        <div class="box-holder">
          <Box colour='red' key={1} state={sequence[currentSelection-1] === 1 ? 'selected':'not-selected'}/>
          <Box colour='blue' key={2} state={sequence[currentSelection-1] === 2 ? 'selected':'not-selected'}/>
          <Box colour='green' key={3} state={sequence[currentSelection-1] === 3 ? 'selected':'not-selected'}/>
          <Box colour='yellow' key={4} state={sequence[currentSelection-1] === 4 ? 'selected':'not-selected'}/>
        </div>
        <div>level: {level}</div>
        <div>sequence: {sequence}</div>
        <div>currentSelection: {currentSelection}</div>
      </div>
   );
}

export default App;
