import React from 'react';
import Palette from '../resources/palette.jsx';
import {Link} from "react-router-dom";
import ColorPicker from '../components/ColorPicker.jsx';
import Counter from '../components/Counter.jsx';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../components/Modal.jsx';

const Begin = () => {
  const game = useSelector(state => state.game);
  const dispatch = useDispatch();
  return (
    <div className="main begin">
      {!game.isStarted ?
        <Modal onClose={() => dispatch({type: "STARTGAME"})}>Сейчас Вам предстоит угадать <mark className="yellow">{game.answers.length}</mark> цветов<br/><mark className="yellow">Готовы?</mark></Modal> :
        <></>
      }
      <Counter/>
      <h1>Приступим</h1>
      <h3>Какой это цвет?</h3>
      <ColorPicker />
      
    </div>
  );
}

export default Begin;