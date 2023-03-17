import React from 'react';
import Palette from '../media/palette.jsx';
import {Link} from "react-router-dom";
import ColorPicker from '../components/ColorPicker.jsx';
import Counter from '../components/Counter.jsx';

const Begin = () => {
  return (
    <div className="main begin">
      <Counter/>
      <h1>Приступим</h1>
      <h3>Какой это цвет?</h3>
      <ColorPicker color="#ffee55" list={["#ffee55", "#eeff55", "#55ffee", "#55eeff"]}/>
      
    </div>
  );
}

export default Begin;