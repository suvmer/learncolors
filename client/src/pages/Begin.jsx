import React from 'react';
import Palette from '../resources/palette.jsx';
import {Link} from "react-router-dom";
import ColorPicker from '../components/ColorPicker.jsx';
import Counter from '../components/Counter.jsx';

const Begin = () => {
  return (
    <div className="main begin">
      <Counter/>
      <h1>Приступим</h1>
      <h3>Какой это цвет?</h3>
      <ColorPicker />
      
    </div>
  );
}

export default Begin;