import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../App';

const ColorPicker = () => {
  const {steps, tasks, onClickVariant, goBack/*, answers*/} = useContext(Context);
  const task = tasks[steps[0]];
  const [tip, setTip] = useState("Ответ");
  const [back, setBack] = useState(false);
  console.log("this is {`button small ${answers[0][steps[0]] == ind ? 'high' : ''}`}", task);
  return (
    <>
        <div className="colorBox" style={{backgroundColor: task.list[task.correct][0]}}>
      
        </div>
        <div className='list'>
        {task.list.map((element, ind) => <div key={ind} style={{backgroundColor: back ? element[0] : "#61dafb00"}} onClick={
          () => onClickVariant(ind)} className='button small'>{element[1]}</div>)
          }
        </div>
        <div className='list'>
        <div onClick={() => {goBack(); setTip("Ответ"); setBack(false); }} className='button small'>Назад</div>
        <div onClick={() => {setTip(task.list[task.correct][1]); setBack(false)}} className='button small'>{tip}</div>
        <div onClick={() => setBack(!back)} className='button small'>Подсветить</div>
        <div onClick={() => {setTip("Ответ"); onClickVariant(-1); setBack(false)}} className='button small'>Вперёд</div>
        </div>
    </>
  );
}

export default ColorPicker;
