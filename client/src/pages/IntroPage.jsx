import React from 'react';
import PaletteIcon from '../resources/PaletteIcon.jsx';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"; 


const IntroPage = ({goNext}) => {

  return (
    <div className="main">
      <PaletteIcon/>
      <div>
      <h1>LEARN COLORS</h1>
      <h3>Узнавай необычные цвета</h3>
      </div>
      
      <a onClick={() => goNext()} className="button">Начать</a>
    </div>
  );
}

export default IntroPage;