import React, { useRef, useState } from 'react';
import style from '../styles/modules/form.module.scss';
import { postQuestionRemains } from '../utils/api';
import FormCheckBox from './Form-check-box';

const Form = () => {

  let name_wrap = useRef();
  let name_input = useRef();
  let phone_input = useRef();
  let email_input = useRef();
  let message_input = useRef();

  let [nameStatus, setNameStatus] = useState('inpuNoActive');
  let [phoneStatus, setPhoneStatus] = useState('inpuNoActive');
  let [emailStatus, setEmailStatus] = useState('inpuNoActive');
  let [messageStatus, setMessageStatus] = useState('inpuNoActive');
  let [showPopap, setShowPopap] = useState(false);
  let [checkBoxStatus, setCheckBoxStatus] = useState(false)
  let [checkBoxStyle, setChekcBoxStyle] = useState('')

  function setCheckBox() {
    if (!checkBoxStatus) {
      setChekcBoxStyle('box_checked')
    } else {
      setChekcBoxStyle('')
    }

    setCheckBoxStatus(checkBoxStatus = !checkBoxStatus)
  }

  function inputFocus(param) {
    if(param === '*Ім’я та прізвище') {
      name_input.current.placeholder = ''
      setNameStatus('inputActive')
    }

    if(param === '*Телефон') {
      phone_input.current.placeholder = ''
      setPhoneStatus('inputActive')
    }

    if(param === '*Email') {
      email_input.current.placeholder = ''
      setEmailStatus('inputActive')
    }

    if(param === 'Твоє повідомлення') {
      message_input.current.placeholder = ''
      setMessageStatus('inputActive')
    }
    
  }
  
  function inputBlur(param) {
    if(param === '*Ім’я та прізвище') {
      if(name_input.current.value === '' || name_input.current.value === ' ') {
        name_input.current.value = ''
        name_input.current.placeholder = param
        setNameStatus('inpuNoActive')
      }

      if(name_input.current.value !== '' && name_input.current.value.length < 3) {
        setNameStatus('inputError')
      }
    }

    if(param === '*Телефон') {
      if(phone_input.current.value === '' || phone_input.current.value === ' ') {
        phone_input.current.value = ''
        phone_input.current.placeholder = param
        setPhoneStatus('inpuNoActive')
      }

      if(phone_input.current.value !== '' && phone_input.current.value.length < 10) {
        setPhoneStatus('inputError')
      }
    }

    if(param === '*Email') {
      if(email_input.current.value === '' || email_input.current.value === ' ' ) {
        email_input.current.value = ''
        email_input.current.placeholder = param
        setEmailStatus('inpuNoActive')
      }

      if(email_input.current.value !== '' && email_input.current.value.length < 10) {
        setEmailStatus('inputError')
      }
    }

    if(param === 'Твоє повідомлення') {
      if(message_input.current.value === '') {
        message_input.current.value = ''
        message_input.current.placeholder = param
        setMessageStatus('inpuNoActive')
      }
    }
  }

  function popapActive() {
    setShowPopap(showPopap = !showPopap);
  }

  function activePopap() {
    if(
      nameStatus === 'inputActive' &&
      phoneStatus === 'inputActive' &&
      emailStatus === 'inputActive' &&
      checkBoxStatus === true
    ) {
        sendMail()
        setNameStatus('inpuNoActive')
        setPhoneStatus('inpuNoActive')
        setEmailStatus('inpuNoActive')
        setMessageStatus('inpuNoActive')
        setCheckBoxStatus(false)
        setChekcBoxStyle('')
        popapActive()
    }

    if (nameStatus === 'inpuNoActive') {
      setNameStatus('inputError')
    }

    if (phoneStatus === 'inpuNoActive') {
      setPhoneStatus('inputError')
    }

    if (emailStatus === 'inpuNoActive') {
      setEmailStatus('inputError')
    }

    if (checkBoxStatus === false) {
      setChekcBoxStyle('box_checked_error')
    }

  }

  function sendMail() {
    postQuestionRemains({
      description: message_input.current.value,
      email: email_input.current.value,
      fullname: name_input.current.value,
      phone: phone_input.current.value
    }).then(() => {
      message_input.current.value = '';
      message_input.current.placeholder = 'Твоє повідомлення'
      email_input.current.value = '';
      email_input.current.placeholder = '*Email';
      name_input.current.value = '';
      name_input.current.placeholder = '*Ім’я та прізвище';
      phone_input.current.value = '';
      phone_input.current.placeholder = '*Телефон';

      inputBlur()
    })
  }

  return (
    <div className={style.form_wrap}>
      <form className={style.form}>
        {showPopap ?   <div className={style.popup }>
          <div className={style.text_wrap}>
            <span className={style.popap_text}>Ваш запит надіслано. Ми зв’яжемось з вами найближчим часом</span>
            <div
              className={style.popap_btn}
              onClick={()=>{popapActive()}}
            >
              <div>
                <span>Зрозуміло</span>
              </div>
            </div>
          </div>
        </div> : ''}
        <span className={style.title}>Залишилися питання?</span>
        <span className={style.answer}>AGYM з радістю відповість на них</span>
        <div className={`${style.input_wrap} ${style[nameStatus]}`}
        >
          <div className={`${style.input_info_wrap} ${style.active_info}`}>
            <span className={style.input_info}>Ім’я та прізвище</span>
          </div>
          <input
            onFocus={()=>{inputFocus('*Ім’я та прізвище');}} 
            onBlur={()=>{inputBlur('*Ім’я та прізвище');}}
            ref={name_input}
            type="text"
            placeholder='*Ім’я та прізвище'
          />
        </div>
        <div className={`${style.input_wrap} ${style[phoneStatus]}`}>
        <div className={`${style.input_info_wrap} ${style.active_info}`}>
            <span className={style.input_info}>Телефон</span>
          </div>
          <input
            className={style.input__phone}
            onFocus={()=>{inputFocus('*Телефон');}} 
            onBlur={()=>{inputBlur('*Телефон');}}
            ref={phone_input}
            autocmplite='true'
            placeholder='*Телефон'
            type="number"
          />
        </div>
        <div className={`${style.input_wrap} ${style[emailStatus]}`}>
          <div className={`${style.input_info_wrap} ${style.active_info}`}>
            <span className={style.input_info}>Email</span>
          </div>
          <input
            onFocus={()=>{inputFocus('*Email');}} 
            onBlur={()=>{inputBlur('*Email');}}
            ref={email_input}
            type="text"
            placeholder='*Email'
          />
        </div>
        <div  className={`${style.input_wrap} ${style[messageStatus]}`}>
          <div className={`${style.input_info_wrap} ${style.active_info}`}>
            <span className={style.input_info}>Твоє повідомлення</span>
          </div>
          <textarea
            onFocus={()=>{inputFocus('Твоє повідомлення');}} 
            onBlur={()=>{inputBlur('Твоє повідомлення');}}
            ref={message_input}
            className={style.message}
            placeholder="Твоє повідомлення"
          />
        </div>
        <FormCheckBox
          ckecked={()=>{setCheckBox()}}
          className={checkBoxStyle}
        />
        <span className={style.binding}>*Обов’язкове поле</span>
        <div
          className={style.btn_wrap}
          onClick={()=>{activePopap()}}
        >
          <button type='button'><span>Надіслати</span></button>
        </div>
      </form>
    </div>
  )
}

export default Form
