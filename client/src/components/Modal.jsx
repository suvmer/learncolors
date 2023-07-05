import React, { useContext } from 'react';

export default ((props) => {
    return (
      <div onClick={() => props.onClose()} className="modal_bg">
        <div className="modal">
            {props.children}
        </div>
      </div>
    );
  })
