import React, { Fragment, useState } from 'react';
import style from '../styles/modules/services-switcher.module.scss';
import GradientText from './Gradient-text';
import Arrow from '../public/icon-svg/Drop-down-icon';
import ConsultationBtn from '../components/buttons/Trial-training-btn'

const ServicesSwitcher = () => {

  let [activeBtn, setActiveBtn] = useState(1);
  let [activeInfo, setActiveInfo] = useState(1);

  let switchBtn = [
    {id: 1, name: 'КОНСУЛЬТАЦІЯ'},
    {id: 2, name: 'СУПРОВІД'},
    {id: 3, name: 'СУПРОВІД PRO'}
  ]


  let data1 = [

    {id: 1, name: 'Що ти отримуєш', text:[
      {id: 1, text:'Розшифровку результатів аналізів (при необхідності скерування до спеціалістів)'},
      {id: 2, text:'Рекомендації на основі вхідних даних (звички, харчування, дефіцити)'},
      {id: 3, text:'Приклади створення меню на день (сніданки/обіди/вечері) – фото'},
      {id: 4, text:'Інфо по БЖУ та основних мікронутрієнтах'},
      {id: 5, text:'Усі запитання розбираємо протягом 5 днів з 10:00 до 18:00'},
  
    ]},

    {id: 2, name: 'Від тебе', text:[
      {id: 1, text:'Чесно відповідаєш на запитання анкети'},
      {id: 2, text:'Робиш антропологічні заміри та фото'},
      {id: 3, text:'Ставиш цілі'},
      {id: 4, text:'За бажанням здаєш аналізи'},
    ]},

    {id: 3, name: 'Як це працює', text:[
      {id: 1, text:'Оплати'},
      {id: 2, text:'Заповни анкету (анкета)'},
      {id: 3, text:'Зроби заміри (чого саме)'},
      {id: 4, text:'Отримай інформацію'},
      {id: 5, text:'Отримай аналіз твого харчування з урахуванням дефіцитів (за результатами аналізів) та стратегію роботи зі списком рекомендацій (це може тривати 1-5 днів)'},
      {id: 6, text:'Отримай меню особисте меню на 2 дні'},
      {id: 7, text:'Відповідаємо на запитання – після отримання тобою стратегії подальших дій'},
    ]}
  ]

  let data2 = [

    {id: 1, name: 'Що ти отримуєш', text:[
      {id: 1, text:'Розшифровку результатів аналізів (при необхідності скерування до спеціалістів)'},
      {id: 2, text:'Рекомендації на основі вхідних даних (звички, харчування, дефіцити)'},
      {id: 3, text:'Інфо по БЖУ та основних мікронутрієнтах'},
      {id: 4, text:'Інфо про основні принципи приготування продуктів'},
      {id: 5, text:'Інфо про звички та здоровий спосіб життя'},
      {id: 6, text:'Чат в Telegram каналі з особистим консультантом кожного дня з 10:00 до 18:00 – 2 тижні (крім суботи та неділі)'},
      {id: 7, text:'Висновки про харчування за цей час'},
    ]},

    {id: 2, name: 'Від тебе', text:[
      {id: 1, text:'Чесно відповідаєш на запитання анкети'},
      {id: 2, text:'Робиш антропологічні заміри та фото'},
      {id: 3, text:'Ставиш цілі'},
      {id: 4, text:'Здаєш аналізи'},
    ]},

    {id: 3, name: 'Як це працює', text:[
      {id: 1, text:'Оплати'},
      {id: 2, text:'Заповни анкету (анкета)'},
      {id: 3, text:'Зроби заміри (чого саме)'},
      {id: 4, text:'Надішли фото (інструкція)'},
      {id: 5, text:'Отримай інформацію'},
      {id: 6, text:'Отримай аналіз твого харчування з урахуванням дефіцитів (за результатами аналізів) та стратегію роботи зі списком рекомендацій (це може тривати 1-5 днів)'},
      {id: 7, text:'Отримай меню особисте меню на 2 дні'},
      {id: 8, text:'Початок консультацій в Telegram – після отримання тобою стратегії подальших дій'},
      {id: 9, text:'Кожного дня надсилай звіти про своє харчування і куратор відразу внесе корективи та дасть рекомендації. Особливо, якщо ти дорозі, на пікніку, в гостях'},
      {id: 10, text:'1 раз на тиждень роби CHEK: контрольні заміри, перевіряй свої знання та корегуй звички'},
    ]}
  ]

  let data3 = [

    {id: 1, name: 'Що ти отримуєш', text:[
      {id: 1, text:'Розшифровку результатів аналізів (при необхідності скерування до спеціалістів)'},
      {id: 2, text:'Рекомендації на основі вхідних даних (звички, харчування, дефіцити)'},
      {id: 3, text:'Інфо по БЖУ та основних мікронутрієнтах'},
      {id: 4, text:'Інфо про основні принципи приготування продуктів'},
      {id: 5, text:'Інфо про звички та здоровий спосіб життя'},
      {id: 6, text:'Чат в Telegram каналі з особистим консультантом кожного дня з 10:00 до 18:00 – 2 тижні (крім суботи та неділі)'},
      {id: 7, text:'Висновки про харчування за цей час'},
    ]},

    {id: 2, name: 'Від тебе', text:[
      {id: 1, text:'Чесно відповідаєш на запитання анкети'},
      {id: 2, text:'Робиш антропологічні заміри та фото'},
      {id: 3, text:'Ставиш цілі'},
      {id: 4, text:'Здаєш аналізи'},
    ]},

    {id: 3, name: 'Як це працює', text:[
      {id: 1, text:'Оплати'},
      {id: 2, text:'Заповни анкету (анкета)'},
      {id: 3, text:'Зроби заміри (чого саме)'},
      {id: 4, text:'Надішли фото (інструкція) - ДО'},
      {id: 5, text:'Отримай інформацію'},
      {id: 6, text:'Отримай аналіз твого харчування з урахуванням дефіцитів (за результатами аналізів) та стратегію роботи зі списком рекомендацій (це може тривати 1-5 днів)'},
      {id: 7, text:'Отримай меню особисте меню на 5 днів'},
      {id: 8, text:'Початок консультацій в Telegram – після отримання тобою стратегії подальших дій'},
      {id: 9, text:'Кожного дня надсилай звіти про своє харчування і куратор відразу внесе корективи та дасть рекомендації. Особливо, якщо ти дорозі, на пікніку, в гостях'},
      {id: 10, text:'1 раз на тиждень роби CHEK: контрольні заміри, перевіряй свої знання та корегуй звички'},
      {id: 11, text:'Зроби фото – ПІСЛЯ'},
      {id: 12, text:'Отримай висновки за цей продуктивний місяць'},
    ]}
  ]

  let [infoData, setinfoData] = useState(data1);

  function changeActiveBtn(id) {
    if (id === 1) {
      setinfoData(data1)
    }

    if (id === 2) {
      setinfoData(data2)
    }

    if (id === 3) {
      setinfoData(data3)
    }

    setActiveBtn(id);
  };

  function Info(id) {
    setActiveInfo(id);
  };

  return (
    <div className={style.services_bcg}>
      <div className={style.services}>
        <GradientText className={style.title}>Послуги</GradientText>
        <div className={style.switcher_wrap}>
          {switchBtn.map(({id, name})=>{
            return (
              <div
                key={id}
                onClick={()=>{changeActiveBtn(id)}}
                className={activeBtn === id ? style.active : ''}
              > 
                {name}
              </div>
            )
          })}
         
        </div>
        <div className={style.main_wrap}>
          <img src={`/nutrition/Level_${activeBtn}.png`} alt="img" />
          <div className={style.info_wrap}>
            {infoData.map(({id, name, text})=>{
              return (
                <Fragment key={id}>
                  <div
                    className={`${style.title_wrap}
                    ${activeInfo === id ? style.title_active : ''}`}
                    onClick={()=>{Info(id);}}
                  >
                    <div className={style.title_info}>
                      <span>{name}</span>
                      <Arrow className={style.arrow} />
                    </div>
                  </div>
                  <div className={`${style.text_wrap} ${activeInfo === id ? style.text_active : ''}`}>
                    <div className={style.text_info}>
                      <ul>
                        {text.map(({text, id})=>{
                          return (
                            <li key={id}>{text}</li>
                          )
                        })}
                      </ul>
                        {activeBtn !== 1 ?
                          <div className={style.present}>
                            <span>ПОДАРУНОК</span> 
                            {activeBtn === 2 ? 'Інфо про стрес: як він впливає на наше здоров’я, як його виявляти та контролювати' : ''}
                            {activeBtn === 3 ? 'Інфо про гормони: їх зв’язок з їжею та нашим способом життя, як вони управляють нашими харчовими вподобаннями  та зовнішнім виглядом' : ''}

                          </div> :
                          null
                        }
                    </div>
                  </div>
                </Fragment>
              )
            })};
            
            <div className={style.consultation_wrap}>
              <span>Вартість: <GradientText>1500 грн</GradientText></span>
              <ConsultationBtn consultation>Записатись на консультацію</ConsultationBtn>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSwitcher
