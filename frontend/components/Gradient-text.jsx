import React from 'react';
import style from '../styles/modules/gradient-text.module.scss';

const GradientText = ({children, className}) => {
  return (
    <span className={`${style.gradien} ${className}`}>
      {children}
    </span>
  );
};

export default GradientText;
