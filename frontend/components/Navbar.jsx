import Link from "next/link";
import style from '../styles/modules/nav.module.scss';
import Logo from '../public/icon-svg/Logo.jsx';
import TrialTrainingBtn from "./buttons/Trial-training-btn";
import MobileMenuIcon from "../public/icon-svg/Mobile-menu-icon";
import MobileMenu from "./Mobile-menu";
import { useState, useEffect } from 'react';
import TrialTrainingModal from "./Trial-training-modal";
import { useRouter } from 'next/router'

const Navbar = () => {
  let [activeMob, setActiveMob] = useState(false);
  let [showTrainModal, setShowTrainModal] = useState(false);


  function mobMenu() {
    setActiveMob(activeMob = !activeMob)
  }

  let menuList = [
    {id: 1, name:'Абонементи', path:'/membership'},
    {id: 2, name:'Послуги', path:'/training'},
    {id: 3, name:'Галерея', path:'/gallery'},
    {id: 4, name:'Про нас', path:'/about'},
    {id: 5, name:'Блог', path:'/blog'},
    {id: 6, name:'FAQ', path:'/faq'},
    {id: 7, name:'Контакты' , path:'#contacts'},
  ]

  let [linkIsActive, setLinkIsactive] = useState('/')
  let [modalWindowStatus, setModalWindowStatus] = useState(false)
  const router = useRouter()

  function showModalTrain(status) {
    setShowTrainModal(showTrainModal = !showTrainModal)
    setModalWindowStatus(status)
  }
  

  return (
    <div id="nav" className={style.nav_position}>
      <nav className={style.nav}>
      {showTrainModal ? 
        <TrialTrainingModal 
          closeWindow={()=>{showModalTrain();}}
          consultation={modalWindowStatus}
          
        /> : '' }
        <div className={style.mobile_element} />
        <Link href="/"><a><Logo className={style.nav__logo} /></a></Link>
        {router.path}
        <ul className={style.nav__link_wrap}>
          {menuList.map(({id, name, path})=>{
            return (
              <li
                key={id}
                className={`${name ==='Послуги' ? style.drop_down : ''} ${`/${router.pathname.split('/')[1]}` === path ? style.active_link : ''} `}
              >
                <Link href={path === '/training' ? '' : path === '/gallery' ? '/gallery/gallery' : path}>{name}</Link>
              {name === 'Послуги' ? 
                <div className={style.drop_down__list }>
                  <Link href="training/newbie"> 
                    <a>Фітнес для початківців</a>
                   </Link>
                  <Link href="/training/personal"><a>Персональні тренування</a></Link>
                  <Link href="/training/training"><a>Розробка програми тренування</a></Link>
                  <Link href="/training/nutrition"><a>Підбір системи харчування</a></Link>
                  <Link href="/training/supplement"><a>Спортивне харчування</a></Link>
                </div> : null
              }
            </li>
            )
          })}
        </ul>
        <MobileMenuIcon
          mobMenu={()=>{mobMenu()}}
          className={style.mob_menu_icon}
        />
        <TrialTrainingBtn 
          className={style.nav__trial}
          consultation
          funcAction={()=>{showModalTrain(false);}}
        >
          Пробне тренування
        </TrialTrainingBtn >
        
        <MobileMenu
          close={()=>{mobMenu()}}
          activeMob={activeMob}
        />
      </nav>
    </div>
  );
};

export default Navbar;
