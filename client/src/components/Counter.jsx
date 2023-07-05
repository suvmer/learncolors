import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

const Counter = ({game, step}) => {
  return (
    <div className="counter">
       Очков: <mark className='yellow'>{game.score}</mark>
       <p>Уровень: <mark className='yellow'>{step+1}/{game.questions.length}</mark></p>
    </div>
  );
}

export default Counter;
