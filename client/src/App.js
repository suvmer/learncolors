import './App.css';
import Main from './pages/Main';
import Begin from './pages/Begin';
import React, { useEffect, useMemo, useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { generateTasks } from './utils/utils';

const Context = React.createContext();

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}


/* TODO: TIPS:
ВАЖНАЯ ИНФА ПО ПОВОДУ ПРОЕКТА:
Это не просто игра.
Возможное использование:
1) Медицинские показания
2) Для дальтоников(запомнить цвета)
3) После операции на хрусталике(они видят ярко или тёмно, для восстановления цвета)
4) Узнать необычные цвета(слоган)


*/





var tasks = [], answers = [];

function App() {
  const [score, setScore] = useState(0);
  const [step, setStep] = useState(0);

  
  useMemo( () => {
    tasks = generateTasks(20, 3);
    answers = Array(tasks.length).fill(-1);
  }, []);
  
  
  

  const onClickVariant = (index) => {
    if(answers[step] == -1) {
      answers[step] = index;
      if(index == tasks[step].correct)
        setScore(score+1);
    }

    setStep((step+1)%tasks.length);
    console.log(answers);
  }

  const goBack = () => setStep((step-1+tasks.length)%tasks.length);

  return (
    <Context.Provider value = {{
      counter: [score, setScore],
      steps: [step, setStep],
      onClickVariant: onClickVariant,
      goBack: goBack,
      tasks: tasks,
      answers: answers
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/begin" element={<Begin/>}/>
          <Route path="/" element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}


export {Context}
export default App;
