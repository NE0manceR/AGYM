import React from 'react'
import style from '../styles/modules/form-check-box.module.scss'

const FormCheckBox = ({ckecked, className}) => {
  return (
    <div
      className={`${style.check_box} `}
      onClick={()=>{ckecked()}}
    >
      <div className={`${style.box} ${style[className]}`}>

      </div>
      Даю згоду на обробку персональних даних
    </div>
  )
}

export default FormCheckBox
