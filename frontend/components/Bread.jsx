import React from 'react';
import style from '../styles/modules/bread.module.scss';

const Bread = ({children, className}) => {
  return (
    <div className={`${style.bread} ${className}`}>
      {children}
    </div>
  );
};

export default Bread;
