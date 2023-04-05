import React, { useContext, useEffect, useState } from 'react';
import {useDispatch, useSelector} from "resct-redux"; 

const ColorPicker = () => {

  
  

  const {steps, tasks, goBack, answers} = useContext(Context);
  const task = tasks[steps[0]];
  const [tip, setTip] = useState("Ответ");
  const [back, setBack] = useState(false);

  const dispatch = useDispatch();




  const game = useSelector(state => state.game);
  const selectAnswer = (index) => {



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


  return (
    <>
        <div className="colorBox" style={{backgroundColor: task.list[task.correct][0]}}>
      
        </div>
        <div className='list' style={{cursor: answers[steps[0]] == -1 ? 'default' : 'not-allowed'}}>
        {task.list.map((element, ind) => <div key={ind} style={{backgroundColor: back ? element[0] : "#61dafb00", pointerEvents: answers[steps[0]] == -1 ? 'all' : 'none'}} onClick={
          () => selectAnswer(ind)} className={`button small ${answers[steps[0]] == ind ? (ind == task.correct ? 'green' : 'red') : ''}`}>{element[1]}</div>)
          }
        </div>
        <div className='list'>
        <div onClick={() => {goBack(); setTip("Ответ"); setBack(false); }} className='button small'>Назад</div>
        <div onClick={() => {setTip(task.list[task.correct][1]); setBack(false)}} className='button small'>{tip}</div>
        <div onClick={() => setBack(!back)} className='button small'>Подсветить</div>
        <div onClick={() => {setTip("Ответ"); selectAnswer(-1); setBack(false)}} className='button small'>Вперёд</div>
        </div>
    </>
  );
}

export default ColorPicker;
