import React, { useContext } from 'react';
import { Context } from '../App';

const Counter = () => {
  const {counter, steps} = useContext(Context);
  return (
    <div className="counter">
       Очков: <mark className='yellow'>{counter[0]}</mark>
       <p>Уровень: <mark className='yellow'>{steps[0]+1}</mark></p>
    </div>
  );
}

export default Counter;
