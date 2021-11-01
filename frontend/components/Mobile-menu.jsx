import Link from 'next/link';
import React, { useState } from 'react';
import CloseMobMeny from '../public/icon-svg/Close-mob-menu-icon';
import style from '../styles/modules/mobile-menu.module.scss';
import DropDownIcon from '../public/icon-svg/Drop-down-icon';

const MobileMenu = ({activeMob, close}) => {

  let [list, setList] = useState(false);

  function showList() {
    setList( list = !list)
  }

  return (
    <div className={`${style.mobile_bcg} ${activeMob ? style.mobile_active : ''}`}>
      <div className={style.icon_wrap}>
        <CloseMobMeny
          close={()=>{close()}}
          className={style.close_icon} />
      </div>
      <div
        onClick={()=>{close()}}
        className={style.link_wrap}
      >
          <Link href="/">Абонементи</Link>
      </div>
      <div className={`${style.link_wrap} ${list ? style.active_list : ''}`}
        onClick={()=>{showList()}}
      >
        <div className={`${style.service} ${list ? style.active : ''}` }>
          <span >Послуги</span><DropDownIcon className={`${list ? style.active_arrow : ''}`} />
        </div>
      </div>

      <div className={`${style.link_wrap} ${style.sub_list } ${list ? style.sub_list_active : ''} ${list ? style.active_list : ''}`}>
        <Link href="/training/newbie">
          <a onClick={()=>{close()}}>Фітнес для початківців</a>
        </Link>
        <Link href="/training/personal">
          <a onClick={()=>{close()}}>Персональні тренування</a>
        </Link>
        <Link href="/training/training">
          <a onClick={()=>{close()}}>Розробка програми тренування</a>
        </Link>
        <Link href="/training/nutrition">
          <a onClick={()=>{close()}}>Розробка програми харчування</a>
        </Link>
        <Link href="/training/supplement">
          <a onClick={()=>{close()}}>Спортивне харчування</a>
        </Link>
      </div>

      <div className={style.link_wrap}>
        <Link href="/gallery/gallery">
          <a onClick={()=>{close()}}>Галерея</a>
        </Link>
      </div>
      <div className={style.link_wrap}>
        <Link href="/about">
          <a onClick={()=>{close()}}>Про нас</a>
        </Link>
      </div>
      <div className={style.link_wrap}>
        <Link href="/blog">
          <a onClick={()=>{close()}}>Блог</a>
        </Link>
      </div>
      <div className={style.link_wrap}>
        <Link href="/faq">
          <a onClick={()=>{close()}}>FAQ</a>
        </Link>
      </div>
      <div className={style.link_wrap}>
        <Link href="/faq#contacts">
          <a onClick={()=>{close()}}>Контакти</a>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
