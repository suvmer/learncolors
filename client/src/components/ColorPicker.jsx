import React from 'react';

const ColorPicker = ({color, list}) => {

  return (
    <>
        <div className="colorBox" style={{backgroundColor: color}}>

        </div>
        <div className='list'>
        {list.map(element => <div className='button'>{element}</div>)}
        </div>
    </>
  );
}

export default ColorPicker;
