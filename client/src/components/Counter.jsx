import React, { useContext } from 'react';
import { Context } from '../App';

const Counter = () => {
  const {counter} = useContext(Context);
  return (
    <div className="counter">
       Очков: <mark className='yellow'>{counter[0]}</mark>
    </div>
  );
}

export default Counter;
