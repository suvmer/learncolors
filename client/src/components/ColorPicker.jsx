import React, { useEffect, useState } from 'react';

const ColorPicker = ({gameController, task, answered}) => {
  const [tip, setTip] = useState("Ответ");
  const [back, setBack] = useState(false);
  useEffect(() => setTip("Ответ"), [task]);
  return (
    <>
        <div className="colorBox" style={{backgroundColor: task.list[task.correct][0]}}>
      
        </div>
        <div className='list' style={{cursor: answered == -1 ? 'default' : 'not-allowed'}}>
          {task.list.map((element, ind) =>
            <div
              key={ind}
              style={{backgroundColor: back ? element[0] : "#61dafb00", pointerEvents: answered == -1 ? 'all' : 'none'}}
              onClick={ () => { gameController.selectAnswer(ind); setBack(false); } }
              className={`button small button_light ${answered == ind ? (ind == task.correct ? 'green' : 'red') : ''}`}>
                {element[1]}
            </div>
          )}
        </div>
        <div className='list'>
          <div onClick={() => gameController.switchPage(-1)} className='button small'>Назад</div>
          <div onClick={() => setTip(task.list[task.correct][1])} className='button small'>{tip}</div>
          <div onClick={() => setBack(!back)} className='button small'>Подсветить</div>
          <div onClick={() => gameController.switchPage(1)} className='button small'>Вперёд</div>
        </div>
    </>
  );
}

export default ColorPicker;
