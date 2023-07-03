import './App.css';
import IntroPage from './pages/IntroPage';
import GamePage from './pages/GamePage';
import React, { useEffect, useMemo, useState } from 'react';
import { generateTasks } from './utils/utils';
import { useDispatch, useSelector} from "react-redux"; 

function App() {
  const [isStart, setStart] = useState(true);
  return (
    isStart ?
      <IntroPage goNext={() => setStart(false)} /> :
      <GamePage/>
  );
}


export {initializeGameAction}
export default App;
