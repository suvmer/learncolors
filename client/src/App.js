import './App.css';
import Main from './pages/Main';
import Begin from './pages/Begin';
import React, { useEffect, useMemo, useState } from 'react';
import { generateTasks } from './utils/utils';
import {useDispatch, useSelector} from "resct-redux"; 

function initializeGameAction(tasks = 10, answers = 3) {
  return {
    type: "INITIALIZE",
    payload: {
      step: 0,
      score: 0,
      isStarted: false, //for start info modal
      isInitialized: false,
      questions: generateTasks(tasks, answers),
      answers: Array(tasks).fill(-1)
    }
  };
}

function App() {
 
  /*const onClickVariant = (index) => {

    if(answers[step] == -1) {
      setAnswers(answers.map((el, i) => { //answers[step] = index;
        if(i == step)
          return index;
        return el;
      }));
      if(index == tasks[step].correct)
        setScore(score+1);
    }

    setStep((step+1)%tasks.length);
    console.log(answers);
  }

  const goBack = () => setStep((step-1+tasks.length)%tasks.length);*/

  const game = useSelector(state => state.game);  

/*
<Context.Provider value = {{
      counter: [score, setScore],
      steps: [step, setStep],
      onClickVariant: onClickVariant,
      goBack: goBack,
      tasks: tasks,
      answers: answers
    }}>
*/

  return (
    game.isInitialized ?
      <Begin/> :
      <Main/>
  );
}


export {initializeGameAction}
export default App;
