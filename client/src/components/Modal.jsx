import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

export default ((props) => {
    const game = useSelector(state => state.game);
    console.log(props);
    return (
      <div onClick={() => props.onClose()} className="modal_bg">
        <div className="modal">
            {props.children}
        </div>
      </div>
    );
  })
