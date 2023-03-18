import './App.css';
import Main from './pages/Main';
import Begin from './pages/Begin';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

const Context = React.createContext();

function App() {
  const [score, setScore] = useState(0);
  const [step, setStep] = useState(0);

  const tasks = [
      {
        color: "#ffee55",
        list: ["#ffee55", "олег", "#55ffee", "четыре"],
        correct: 0
      },
      {
        color: "#55ffee",
        list: ["aboba", "#ffee55", "#55ffee", "nice"],
        correct: 1
      }
    ];

  const onClickVariant = (index) => {
    if(index == tasks[step].correct)
      setScore(score+1);
    setStep(step+1);
  }

  return (
    <Context.Provider value = {{
      counter: [score, setScore],
      steps: [step, setStep],
      onClickVariant: onClickVariant,
      pickColor: pickColor,
      tasks: tasks
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

function pickColor() {

}

export {Context}
export default App;
