import React, { useEffect } from 'react';
import PaletteIcon from '../resources/PaletteIcon.jsx';
import {Link} from "react-router-dom";
import ColorPicker from '../components/ColorPicker.jsx';
import Counter from '../components/Counter.jsx';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../components/Modal.jsx';
import { generateTasks } from '../utils/utils.js';

function initializeGameAction(tasks = 10, answers = 3) {
  return {
    type: "INITIALIZE",
    payload: {
      step: 0,
      score: 0,
      isStarted: false, //for start info modal
      isInitialized: true,
      questions: generateTasks(tasks, answers),
      answers: Array(tasks).fill(-1)
    }
  };
}

const GamePage = () => {
  const game = useSelector(state => state.game);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeGameAction());
  }, []);
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

export default GamePage;