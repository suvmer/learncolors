import React from 'react';
import Palette from '../resources/palette.jsx';
import {Link} from "react-router-dom";
import { initializeGameAction } from '../App.js';
import {useDispatch, useSelector} from "resct-redux"; 


const Main = () => {

  const dispatch = useDispatch();
  
  return (
    <div className="main">
      <Palette/>
      <div>
      <h1>LEARN COLORS</h1>
      <h3>Узнавай необычные цвета</h3>
      </div>
      
      <a onClick={dispatch(initializeGameAction)} className="button">Начать</a>
    </div>
  );
}

export default Main;