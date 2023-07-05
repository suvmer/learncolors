import './App.css';
import IntroPage from './pages/IntroPage';
import GamePage from './pages/GamePage';
import React, { useState } from 'react';

function App() {
  const [isStart, setStart] = useState(true);
  return (
    isStart ?
      <IntroPage goNext={() => setStart(false)} /> :
      <GamePage/>
  );
}

export default App;
