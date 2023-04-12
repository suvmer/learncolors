import './App.css';
import Main from './pages/Main';
import Begin from './pages/Begin';
import React, { useEffect, useMemo, useState } from 'react';
import { generateTasks } from './utils/utils';
import {useDispatch, useSelector} from "react-redux"; 

function initializeGameAction(tasks = 10, answers = 3) {
  return {
    type: "INITIALIZE",
    payload: {
      step: 0,
      score: 0,
      isStarted: false, //for start info modal
      isInitialized: true,
      questions: generateTasks(tasks, answers),
      answers: Array(tasks).fill(-1)
    }
  };
}

function App() {
  const game = useSelector(state => state.game);  
  return (
    game.isInitialized ?
      <Begin/> :
      <Main/>
  );
}


export {initializeGameAction}
export default App;
