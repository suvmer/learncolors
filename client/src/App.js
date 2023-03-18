import './App.css';
import Main from './pages/Main';
import Begin from './pages/Begin';
import React, { useEffect, useMemo, useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import {namedColors} from './media/colors';

const Context = React.createContext();

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}


var tasks = [];

function App() {
  const [score, setScore] = useState(0);
  const [step, setStep] = useState(0);

  
  useMemo( () => {
    /*
    var colors = [];
    const symbs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    const generateColors = (n) => {
      for(let i = 0; i < n; i++) {
        colors.push("#".concat(symbs.random(), symbs.random(), symbs.random(), symbs.random(), symbs.random(), symbs.random()));
      }
    }

    generateColors(100);
    console.log("WORKSS");


    const fn = () => {
      const el = document.getElementById('default');
      const clrs = [];
      const nms = [];
      for(let i = 0; i < el.children.length; i++) {
        nms.push([el.children[i].children[2].textContent, el.children[i].children[1].textContent]);
        clrs.push(el.children[i].children[2].textContent);
      }
      console.log(nms)
      console.log(clrs)
      
    }

    const generateTasks = (tasksCount, answersCount) => {
      for(let i = 0; i < tasksCount; i++) {
        const answ = [];
        for(var j = 0; j < answersCount; j++) {
          answ.push(colors.random());
        }
        tasks.push({
          list: answ,
          correct: Math.floor((Math.random()*answ.length))
        });

      }
    }
    generateTasks(20, 4)*/

    const generateTasks = (tasksCount, answersCount) => {
      for(let i = 0; i < tasksCount; i++) {
        const answ = [];
        for(var j = 0; j < answersCount; j++)
          answ.push(namedColors.random());
        tasks.push({
          list: answ,
          correct: Math.floor((Math.random()*answ.length))
        });

      }
    }
    generateTasks(20, 4)

  }, []);

  const onClickVariant = (index) => {
    if(index == tasks[step].correct)
      setScore(score+1);
    setStep((step+1)%tasks.length);
  }

  const goBack = () => setStep((step-1+tasks.length)%tasks.length);

  return (
    <Context.Provider value = {{
      counter: [score, setScore],
      steps: [step, setStep],
      onClickVariant: onClickVariant,
      goBack: goBack,
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
