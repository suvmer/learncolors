import React, { useEffect, useState } from 'react';
import ColorPicker from '../components/ColorPicker.jsx';
import Counter from '../components/Counter.jsx';
import Modal from '../components/Modal.jsx';
import { generateTasks } from '../utils/utils.js';
import { ANSWERS_COUNT, AUTOTURN_PAGE_DELAY, QUESTIONS_COUNT } from '../config.js';
import { Statistics } from './Staticstics.jsx';

const getDefaultGame = (isEng = false) => ({
  score: 0,
  questions: generateTasks(QUESTIONS_COUNT, ANSWERS_COUNT, isEng),
  answers: Array(QUESTIONS_COUNT).fill(-1), //for history
  timerId: -1 //for autoTurning page
});
const GamePage = () => {
  const [stage, setStage] = useState(0); //stages: 0 - greeting modal, 1 - in game, 2 - finished
  const [step, setStep] = useState(0);
  const [isEng, setEng] = useState(false);
  const [game, setGame] = useState(getDefaultGame(isEng));
  let [answered, correct] = [game.answers[step], game.questions[step].correct];
  const switchToEng = () => {
    setEng(true);
    const newGame = getDefaultGame(true);
    setGame(newGame);
    [answered, correct] = [newGame.answers[step], newGame.questions[step].correct];
  }
  const selectAnswer = (index) => {
    if(answered != -1) //already answered
      return;
    const timerId = setTimeout(() => switchPage(1), AUTOTURN_PAGE_DELAY);
    setGame({...game, score: game.score + (index == correct ? 3 : 0), answers: game.answers.map((old, ind) => ind == step ? index : old), timerId: timerId});
    
    //check if game ends
    const answRemain = game.answers.reduce((acc, el) => acc + (el == -1 ? 1 : 0), 0) - 1; //count unanswered questions
    if(answRemain == 0) {
      setStage(2);
      clearTimeout(timerId);
    }
  }

  /**
   * -1 => backward
   * 1 => forward,
   **/
  const switchPage = (direction) => {
    clearTimeout(game.timerId); //safety(no exceptions in -1 case)
    setStep(Math.max(0, Math.min(game.answers.length-1, step + direction)));
  }

  const resetGame = (gameInfo = null) => {
    setStage(0);
    setStep(0);
    setGame({...(gameInfo ?? getDefaultGame()), answers: Array(QUESTIONS_COUNT).fill(-1), score: 0});
  }

  return (
    <div className="main begin">
      {stage == 0 ?
        <Modal onClose={() => setStage(1)}>
          Сейчас Вам предстоит угадать <mark className="yellow">{game.answers.length}</mark> цветов<br/><mark className="yellow">Готовы?</mark>
          <div onClick={() => { switchToEng(); setStage(1); }} className='button small'>Играть на английском</div>
        </Modal> : ""
      }
      {stage != 2 ? //0, 1 stages
      <>
        <Counter game={game} step={step}/>
        <h1>Приступим</h1>
        <h3>Какой это цвет?</h3>
        <ColorPicker gameController={{selectAnswer, switchPage}} task={game.questions[step]} answered={answered} />
      </> : ""
      }
      {stage == 2 ?
        <Statistics resetGame={resetGame} game={game}/> : ""
      }
    </div>
  );
}

export default GamePage;