import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../App';

const ColorPicker = () => {
  const {steps, tasks, onClickVariant, goBack} = useContext(Context);
  const task = tasks[steps[0]];
  const [tip, setTip] = useState("Ответ");
  const [back, setBack] = useState(false);
  useEffect(() => setTip("Ответ"), [steps[0]]); //reset button after answer
  console.log("this is", task);
  return (
    <>
        <div className="colorBox" style={{backgroundColor: task.list[task.correct][0]}}>
      
        </div>
        <div className='list'>
        {task.list.map((element, ind) => <div key={ind} style={{backgroundColor: back ? element[0] : "transparent"}} onClick={() => onClickVariant(ind)} className='button small'>{element[1]}</div>)}
        </div>
        <div className='list'>
        <div onClick={goBack} className='button small'>Назад</div>
        <div onClick={() => setTip(task.list[task.correct][1])} className='button small'>{tip}</div>
        <div onClick={() => setBack(!back)} className='button small'>Подсветить</div>
        <div onClick={() => onClickVariant(-1)} className='button small'>Вперёд</div>
        </div>
    </>
  );
}

export default ColorPicker;
