import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
  const game = useSelector(state => state.game);
  return (
    <div className="counter">
       Очков: <mark className='yellow'>{game.score}</mark>
       <p>Уровень: <mark className='yellow'>{game.step+1}/{game.questions.length}</mark></p>
    </div>
  );
}

export default Counter;
