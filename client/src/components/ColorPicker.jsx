import React, { useContext, useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux"; 

const ColorPicker = () => {

  
  const game = useSelector(state => state.game);
  const dispatch = useDispatch();
  
  const goChange = (st) => {
    dispatch({
      type: "CHANGEPAGE",
      payload: st
    })
  }

  const task = game.questions[game.step];
  const [tip, setTip] = useState("Ответ");
  const [back, setBack] = useState(false);




  const selectAnswer = (index) => {
     if(game.answers[game.step] == -1) {
      if(index == game.questions[game.step].correct) {
        dispatch({
          type: "CHANGESCORE",
          payload: game.score+3
        })
      }
      dispatch({
        type: "ANSWER",
        payload: index
      })
    }
  }

  console.log(game);
  return (
    <>
        <div className="colorBox" style={{backgroundColor: task.list[task.correct][0]}}>
      
        </div>
        <div className='list' style={{cursor: game.answers[game.step] == -1 ? 'default' : 'not-allowed'}}>
        {task.list.map((element, ind) => <div key={ind} style={{backgroundColor: back ? element[0] : "#61dafb00", pointerEvents: game.answers[game.step] == -1 ? 'all' : 'none'}} onClick={
          () => selectAnswer(ind)} className={`button small ${game.answers[game.step] == ind ? (ind == task.correct ? 'green' : 'red') : ''}`}>{element[1]}</div>)
          }
        </div>
        <div className='list'>
        <div onClick={() => {goChange(-1); setTip("Ответ"); setBack(false); }} className='button small'>Назад</div>
        <div onClick={() => {setTip(task.list[task.correct][1]); setBack(false)}} className='button small'>{tip}</div>
        <div onClick={() => setBack(!back)} className='button small'>Подсветить</div>
        <div onClick={() => {setTip("Ответ"); goChange(1); setBack(false)}} className='button small'>Вперёд</div>
        </div>
    </>
  );
}

export default ColorPicker;
