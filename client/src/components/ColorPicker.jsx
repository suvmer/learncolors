import React, { useContext } from 'react';
import { Context } from '../App';

const ColorPicker = () => {
  const {steps, tasks, onClickVariant, goBack} = useContext(Context);
  const task = tasks[steps[0]];
  console.log("this is", task);
  return (
    <>
        <div className="colorBox" style={{backgroundColor: task.list[task.correct][0]}}>
        {task.list[task.correct][1]}
        </div>
        <div className='list'>
        {task.list.map((element, ind) => <div key={ind} onClick={() => onClickVariant(ind)} className='button small'>{element[1]}</div>)}
        </div>
        <div className='list'>
        <div onClick={goBack} className='button small'>Назад</div>
        <div onClick={() => onClickVariant(-1)} className='button small'>Вперёд</div>
        </div>
    </>
  );
}

export default ColorPicker;
