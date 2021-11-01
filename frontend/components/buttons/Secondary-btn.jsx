import React from 'react';
import style from '../../styles/modules/secondary-btn.module.scss';


const SecondaryBtn = ({className, showMore, children}) => {
  return (
    <button
      className={`${style.secondary} ${className}`}
      onClick={()=>{showMore()}}
    >{children}</button>
  );
};

export default SecondaryBtn;
