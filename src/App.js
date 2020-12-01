import React, { useState , useEffect } from 'react';
import './App.css';
import Box from './components/box';

function App() {
  
  const [gameState, setGameState] = useState('active');
  const [sequence, setSequence] = useState([]);
  const [currentSelection, setCurrentSelection] = useState(-1);
  const [playerLevel, setPlayerLevel] = useState(0);

  const level = sequence.length;
  
  useEffect(() => {
    if (currentSelection > -1 && currentSelection <= sequence.length ) {
      const timerId = setTimeout(() => {
        setCurrentSelection(currentSelection + 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }else{
      setCurrentSelection(-1);
    } 

  });

  const newRound = () => {
    const next = Math.floor(Math.random() * 4);
    const newSequence = sequence.concat(next);
    setSequence(newSequence);
    setCurrentSelection(0);
  };
  
  const onClick = (num) => {
    if(newRoundEnabled)
    return;

   if(sequence[playerLevel]!==num)
   {
    setGameState('lost');
   }
   
    (sequence.length === playerLevel + 1)? setPlayerLevel(0): setPlayerLevel(playerLevel + 1);
   
  }

  const newRoundEnabled = currentSelection === -1 && playerLevel === 0;

  const colours = ['red','blue', 'green', 'orange'];
  return (
      <div className="App">
        {gameState ==='lost'? <div className='game-over' >Game Over</div>:''}

        <button onClick={newRound} disabled={newRoundEnabled?'':'disabled'}>New Round</button>
        <div className="box-holder">
          {colours.map((c,i)=>
          <Box 
          colour={c} 
          num={i} 
          key={i} 
          state={sequence[currentSelection-1] === i || sequence[playerLevel] === i? 'selected':'not-selected'} 
          onClick={onClick}/>)}
        </div>
      </div>
   );
}

export default App;
