import React, { useContext } from 'react';
import { Context } from '../App';

const ColorPicker = () => {
  const {steps, tasks, onClickVariant} = useContext(Context);
  const task = tasks[steps[0]];
  return (
    <>
        <div className="colorBox" style={{backgroundColor: task.color}}>

        </div>
        <div className='list'>
        {task.list.map((element, ind) => <div onClick={() => onClickVariant(ind)} className='button'>{element}</div>)}
        </div>
    </>
  );
}

export default ColorPicker;
