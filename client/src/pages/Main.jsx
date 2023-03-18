import React from 'react';
import Palette from '../media/palette.jsx';
import {Link} from "react-router-dom";

const Main = () => {

    
  return (
    <div className="main">
      <Palette/>
      <div>
      <h1>LEARN COLORS</h1>
      <h3>Узнавай необычные цвета</h3>
      </div>
      
      <Link to="/begin"><a className="button">Начать</a></Link>
    </div>
  );
}

export default Main;