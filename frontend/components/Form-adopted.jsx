import React from 'react';
import style from '../styles/modules/Form-adopted.module.scss';
import ConfirmBtn from '../components/buttons/Trial-training-btn';

const FormAdopted = ({closeWindow, adopted}) => {
  return (
    <div className={style.adopted}>
      <div className={style.message_wrap}>
        <div className={style.apple}>
          <img
            src="/modal_window/Apple.svg" alt="img" 
          />
        </div>
        <img 
            onClick={()=>{closeWindow()}}
            src="/modal_window/close.svg" alt="img"
          />
        <span>Ваш запит надіслано. Деталі замовлення вже у тебе на пошті. Ми зателефонуємо тобі найближчим часом.</span>
        <ConfirmBtn
          consultation
          className={style.confirm_btn}
          funcAction={()=>{adopted()}}
        >
          Зрозуміло
        </ConfirmBtn>
      </div>
    </div>
  );
};

export default FormAdopted;
