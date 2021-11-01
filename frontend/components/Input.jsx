import React, { useRef, useState } from 'react';
import style from '../styles/modules/input.module.scss';

const Input = ({emailStatus, textarea, inputStatus,inputBlur, inputFocus, placeholder, inputName, type, className, defaultValue, error, onChangeValue}) => {



  let input = useRef();

  return (
    <div className={`${style.input_wrap} ${style[inputStatus]} ${className} ${style[error]}`}>
      <div className={`${style.input_info_wrap} ${style.active_info}`}>
        <span className={style.input_info}>{inputName}</span>
      </div>

      {textarea ?
        <textarea
          onFocus={()=>{inputFocus();}} 
          onBlur={()=>{inputBlur();}}
          ref={input}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={()=>{onChangeValue(input.current.value)}}
        ></textarea> :
        <input
          onFocus={()=>{inputFocus();}} 
          onBlur={()=>{inputBlur();}}
          ref={input}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={()=>{onChangeValue(input.current.value)}}
      />
      }
  </div>
  );
};

export default Input;
