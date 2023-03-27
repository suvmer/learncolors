import React, { useContext } from 'react';
import { Context } from '../App';

const Counter = () => {
  const {counter, steps, tasks} = useContext(Context);
  console.log(tasks);
  return (
    <div className="counter">
       Очков: <mark className='yellow'>{counter[0]}</mark>
       <p>Уровень: <mark className='yellow'>{steps[0]+1}/{tasks.length}</mark></p>
    </div>
  );
}

export default Counter;
