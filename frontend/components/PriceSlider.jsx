import Link from "next/link";
import React, { useEffect, useState } from 'react';

import MoreBtn from '../components/buttons/Trial-training-btn'
import NextBtnIcon from '../public/icon-svg/Photo-slider-btn'
import style from '../styles/modules/price-slider.module.scss';
import GradientText from './Gradient-text';

const PriceSlider = ({mainPrices}) => {
  let [switcher, setSwitcher] = useState(false);
  let [activeCard, setActiveCard] = useState(true);
  let [slidePosition, setSlidePosition] = useState();
  let [SlideSize, setPhotoSize] = useState(284);
  let [cardPosition, setCardPosition] = useState(2);
  let [showBtn, setShowBtn] = useState(1360);
  let [btnPosition, setbtnPosition] = useState(0);

  function swithPrice() {

    if (!switcher) {
      setPrice(night)
    } else {
      setPrice(day)
    }
    
    setSwitcher(switcher = !switcher);
  };

  useEffect(() => {
    window.addEventListener('resize',sliderWidth);
    sliderWidth();
  },[])

  function sliderWidth(params) {
    if (window.innerWidth <= 1260) {
      let position = 0;
      let btnPosition = 0;
      btnPosition = (SlideSize / -1) + (window.innerWidth / 2) + (SlideSize / 2) - 6;

      position = (SlideSize * 2 / -1) + (window.innerWidth / 2) - (SlideSize / 2) - 50;
      setSlidePosition(position);
      setbtnPosition(btnPosition)
      setShowBtn(window.innerWidth);
    } else {
      setSlidePosition(0);
      setShowBtn(1360);
    }
  }

  function changeSlide(params) {
    let position = slidePosition;
    let positionCard = cardPosition;

    if(params && positionCard <= 2) {
      positionCard++
      position -= 306
    }

    if(!params && positionCard >= 1) {
      positionCard--
      position += 306
    }

    setCardPosition(positionCard)
    setSlidePosition(position)
    
  }

  function setDays() {
    for (let i = 0; i < mainPrices.length; i++) {
      if (mainPrices[i].time === `afterdark`) {
        night.push(mainPrices[i])
      } else {
        day.push(mainPrices[i])
      }
    }
  }


  let day = []
  let night = [];
  setDays()

  let [price, setPrice] = useState(day)


  return (
    <div className={style.price}>
      <GradientText className={style.title}>Абонементи</GradientText>
      <div className={style.switcher_wrap}>
        <span>Оберіть зручний час</span>
        <div className={style.time_wrap}>
          <span className={!switcher ? style.time_active : ''}>9:00-17:00</span>
          <div
            className={`${style.switcher} ${switcher ? style.active : ''}`}
            onClick={()=>{swithPrice();}}
          >
            <div></div>
          </div>
          <span className={switcher ? style.time_active : '' }>9:00-22:30</span>
        </div>
      </div>
      <div className={style.slider_wrap}>
        <div
          className={style.cards_wrap}
          style={{transform:`translateX(${slidePosition}px)`}}
          >
          {/* <div className={`${style.card} ${style.no_bonuce}`}>
            <div className={style.price_info}>
              <span className={style.info_title}>У вартість входить:</span>
              <ul>
                <li>Навчання початківців з інструктором.</li>
                <li>Програми для Жінок та Чоловіків (3 РІВНІ) </li>
                <li>Консультації по харчуванню.</li>
              </ul>
              <MoreBtn
                className={style.show_more}
                link="/membership"
              >
                Детальніше
              </MoreBtn>
            </div>
            <div className={`${style.card_info} ${style.active_info} `}>
              <span className={style.month}>{price[0].month}</span>
              <span className={style.training}>{price[0].training} занять</span>
              <div className={style.bonuse_wrap}>
                <span>+БОНУС </span>
                <span> {price[1].bonuse} ЗАНЯТЬ</span>
              </div>
              <GradientText className={style.total}>{price[0].price}грн</GradientText>
              
              <Link href="/membership">
              < a className={style.info_btn}>Детальніше</a>
              </Link>
            </div>
          </div> */}

            <div className={`${style.card}`}>
              <div className={style.price_info}>
                <span className={style.info_title}>У вартість входить:</span>
                <ul>
                  <li>Навчання початківців з інструктором.</li>
                  <li>Програми для Жінок та Чоловіків (3 РІВНІ) </li>
                  <li>Консультації по харчуванню.</li>
                </ul>
                <MoreBtn
                  className={style.show_more}
                  link="/membership"
                >
                  Детальніше
                </MoreBtn>
              </div>
              <div className={`${style.card_info} ${style.active_info} `}>
                <span className={style.month}>{price[0] ? price[0].month : ''}</span>
                <span className={style.training}>{price[0] ? price[0].training : ''} занять</span>
                <div className={style.bonuse_wrap}>
                  <span></span>
                  <span></span>
                </div>
                <GradientText className={style.total}>{price[0] ? price[0].price : ''}грн</GradientText>
                <Link href="/membership">
                  <a className={style.info_btn}>Детальніше</a>
                </Link>
              </div>
            </div>

            <div className={`${style.card}`}>
              <div className={style.price_info}>
                <span className={style.info_title}>У вартість входить:</span>
                <ul>
                  <li>Навчання початківців з інструктором.</li>
                  <li>Програми для Жінок та Чоловіків (3 РІВНІ) </li>
                  <li>Консультації по харчуванню.</li>
                </ul>
                <MoreBtn
                  className={style.show_more}
                  link="/membership"
                >
                  Детальніше
                </MoreBtn>
              </div>
              <div className={`${style.card_info} ${style.active_info} `}>
                <span className={style.month}>{price[1] ? price[1].month : ''}</span>
                <span className={style.training}>{price[1] ? price[1].training : ''} занять</span>
                <div className={style.bonuse_wrap}>
                  <span>+БОНУС </span>
                  <span> {price[1] ? price[1].bonuse : ''} ЗАНЯТЬ</span>
                </div>
                <GradientText className={style.total}>{price[1] ? price[1].price : ''}грн</GradientText>
                <Link href="/membership">
                  <a className={style.info_btn}>Детальніше</a>
                </Link>
              </div>
            </div>

              <div className={`${style.card} ${activeCard ? style.active_card : ''}`}>
                <div className={`${style.price_info} ${style.price_info_active}`}>
                  <div className={style.saving}>
                    <span>{price[2].savingPrice} ГРН ЕКОНОМІЇ</span>
                  </div>
                  <div className={style.price_info_wrap}>
                    <span className={style.info_title}>У вартість входить:</span>
                    <ul>
                      <li>Навчання початківців з інструктором.</li>
                      <li>Програми для Жінок та Чоловіків (3 РІВНІ) </li>
                      <li>Консультації по харчуванню.</li>
                    </ul>
                    <MoreBtn
                      className={style.show_more}
                      link="/membership"
                    >
                      Детальніше
                    </MoreBtn>
                  </div>
                </div>
              <div className={style.saving}>
                <span>{price[2].savingPrice} ГРН ЕКОНОМІЇ</span>
              </div>
              <div className={`${style.card_info} ${style.active_info} `}>
                <span className={style.month}>{price[2] ? price[2].month : ''}</span>
                <span className={style.training}>{price[2] ? price[2].training : ''} занять</span>
                <div className={style.bonuse_wrap}>
                  {/* <span>+БОНУС </span>
                  <span> {price[2].bonuse} ЗАНЯТЬ</span> */}
                </div>
                <GradientText className={style.total}>{price[2] ? price[2].price : ''}грн</GradientText>
                <Link href="/membership">
                  <a className={style.info_btn}>Детальніше</a>
                </Link>
              </div>
            </div>

          <div className={`${style.card} ${activeCard ? style.active_card : ''}`}>
            <div className={`${style.price_info} ${style.price_info_active}`}>
              <div className={style.saving}>
                <span>{price[3].savingPrice} ГРН ЕКОНОМІЇ</span>
              </div>
              <div className={style.price_info_wrap}>
                <span className={style.info_title}>У вартість входить:</span>
                <ul>
                  <li>Навчання початківців з інструктором.</li>
                  <li>Програми для Жінок та Чоловіків (3 РІВНІ) </li>
                  <li>Консультації по харчуванню.</li>
                </ul>
                <MoreBtn
                  className={style.show_more}
                  link="/membership"
                >
                  Детальніше
                </MoreBtn>
              </div>
            </div>
            <div className={style.saving}>
              <span>{price[3].savingPrice} ГРН ЕКОНОМІЇ</span>
            </div>
            <div className={`${style.card_info}`}>
              <span className={style.month}>{price[3] ? price[3].month : ''}</span>
              <span className={style.training}>{price[3] ? price[3].training : ''} занять</span>
              <div className={style.bonuse_wrap}>
                {/* <span>+БОНУС </span>
                <span> {price[3].bonuse} ЗАНЯТЬ</span> */}
              </div>
              <GradientText className={style.total}>{price[3] ? price[3].price : ''}грн</GradientText>
              <Link href="/membership">
              < a className={style.info_btn}>Детальніше</a>
              </Link>
            </div>
          </div>

          {/* <div className={`${style.card} ${style.no_bonuce}`}>
            <div className={style.price_info}>
              <span className={style.info_title}>У вартість входить:</span>
              <ul>
                <li>Навчання початківців з інструктором.</li>
                <li>Програми для Жінок та Чоловіків (3 РІВНІ) </li>
                <li>Консультації по харчуванню.</li>
              </ul>
              <MoreBtn
                className={style.show_more}
                url="/membership"
              >
                Детальніше
              </MoreBtn>
            </div>
            <div className={`${style.card_info} ${style.active_info}`}>
              <span className={style.month}>{price[1].month}</span>
              <span className={style.training}>{price[1].training} занять</span>
              <GradientText className={style.total}>{price[1].price}грн</GradientText>
              <Link href="/">
                <a className={style.info_btn}>Детальніше</a>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
      {showBtn <= 1260 ?
        <div
          className={style.btn_wrap}
          style={{transform:`translateX(${btnPosition}px)`}}
        >
        <NextBtnIcon nextPhoto={()=>{changeSlide(false)}} className={style.left}/>
        <NextBtnIcon nextPhoto={()=>{changeSlide(true)}} className={style.right}/>
        </div> : ''
      }
    </div>
  )
}

export default PriceSlider
