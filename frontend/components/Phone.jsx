import React, {useState, useRef, useEffect} from 'react';
import style from '../../frontend/styles/modules/phone.module.scss';

const Phone = () => {
  let [phone, setPhone] = useState(0);

  // useEffect(() => {
  //   if (window.innerWidth >= 1224) {
  //     setPhone((window.innerWidth - 1192) / 2)
  //   } else {
  //     setPhone(16)
  //   }
  // }, [])
  
  return (
    <a
      href="tel:0505536110"
      // style={{right: `${phone}px`}}
      className={style.phone}
    >
    </a>
  )
}

export default Phone
