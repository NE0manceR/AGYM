import React, { useRef } from 'react';
import style from '../styles/modules/membership.module.scss';
import Link from "next/link";
import Bread from "../components/Bread";
import GradientText from "../components/Gradient-text";
import FaqQuestion from '../components/Faq-Question';




const Membership = ({membership}) => {

  let bonuse = useRef();
  let level = useRef();

  let morning = [
    {id: 1, month: '1 МІСЯЦЬ', price: '450'},
    {id: 2, month: '3 МІСЯЦІ', price: '1350'},
    {id: 3, month: '6 МІСЯЦІВ', price: '2500'},
    {id: 4, month: '12 МІСЯЦІВ', price: '4860'},
  ]

  let evening = [
    {id: 1, month: '1 МІСЯЦЬ', price: '550'},
    {id: 2, month: '3 МІСЯЦІ', price: '1650'},
    {id: 3, month: '6 МІСЯЦІВ', price: '3100'},
    {id: 4, month: '12 МІСЯЦІВ', price: '5940'},
  ]

  let cardData = [
    {id: 1, month: '1 МІСЯЦЬ', workout: '12 занять', bonuse: '', value: '450/550', freezing: 'ЗАМОРОЗКА (1тижд.+1тижд.)'},
    {id: 2, month: '3 МІСЯЦІ', workout: '36 занять', bonuse: '+БОНУС 3 ЗАНЯТЬ', value: '1350/1650', freezing: 'ЗАМОРОЗКА (1тижд.+1тижд.)'},
    {id: 3, month: '6 МІСЯЦІВ', workout: '72 заняття', bonuse: '+БОНУС 5 ЗАНЯТЬ', value: '2500/3100', freezing: 'ЗАМОРОЗКА (1тижд.+1тижд. +1тижд.)'},
    {id: 4, month: '12 МІСЯЦІВ', workout: '72 заняття', bonuse: '+БОНУС 5 ЗАНЯТЬ', value: '2500/3100', freezing: 'ЗАМОРОЗКА (1тижд.+1тижд. +1тижд.)'},
  ]

  let question = [
    {id: 1, question: 'Що входить у вартість абонементу?', answer: 'В вартість базового абонемента входить консультація фахового тренера, якій розясне як виконуються правильна техніка фізичних вправ на тренажерах. Як користуватися тренажерами. Як зрозуміти яке навантаження вам підходить під час виконання тих чи інших вправ. Також у вартість входить 3 рівня унікальни базових програм які допоможуть вам з нульовим досвідом занять швидко і якісно втягнутися в тренувальний процес.'},
    {id: 2, question: 'Скільки я маю занять?', answer: 'Залежності від виду абонемента в вас є різна кількість занять. Вони визначені і прописані в прайсі'},
    {id: 3, question: 'Чи можу я пропускати заняття?', answer: 'Ми всі живі люди і в нас бувають різні обставини. Тому в нас присутня система “заморозки абонемента” яка дозволяє не втрачати ваші заняття. Але ці питання бажано обговорити заздалегідь, щоб потім не було непорозумінь.'},
  ]

  function toBonuse() {
    bonuse.current.scrollIntoView()
  }

  function toLevel() {
    level.current.scrollIntoView()
  }


  return (
    <div className={style.membership}>
      <div className={style.month_info_bcg}>
        <div className={style.month_info_wrap}>
          <Bread className={style.crumbs}>
            <Link href="/">Головна</Link>
            <Link href="/"> / Абонементи</Link>
          </Bread>
          <h2 className={style.title}>
            <GradientText>АБОНЕМЕНТИ </GradientText>
            <span>У ТРЕНАЖЕРНИЙ ЗАЛ</span>
          </h2>
          <section className={style.section_wrap}>
            <div className={style.left_wrap}>
              <span className={style.table_info}>* 1 місяць - 12 тренувань</span>
                <div className={style.table}>
                  <div className={style.periods_wrap}>
                    <div className={style.period_wrap}>
                      <GradientText className={style.period}>Денний</GradientText>
                      <span className={style.time}>(9:00-17:00)</span>
                      {membership.listPrices.map(({id, month, dailyPrices}) => {
                        return (
                          <div key={id} className={style.month_wrap}>
                            <span className={style.month}>{month}</span>
                            <span className={style.price}>
                              <span className={style.number}>{dailyPrices} </span> 
                              <span className={style.letters}>ГРН</span>
                            </span>
                          </div>
                        )
                      })}
                    </div>
                    <div className={style.period_wrap}>
                      <GradientText className={style.period}>Вечірній</GradientText>
                      <span className={style.time}>(9:00-22:30)</span>
                      {membership.listPrices.map(({id, month, afterDarkPrices}) => {
                        return (
                          <div key={id} className={style.month_wrap}>
                            <span className={style.month}>{month}</span>
                            <span className={style.price}>
                              <span className={style.number}>{afterDarkPrices} </span> 
                              <span className={style.letters}>ГРН</span>
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div className={style.personal}>
                    <span className={style.text}>ПЕРСОНАЛЬНЕ ТРЕНУВАННЯ З ТРЕНЕРОМ</span>
                    <span>
                      {membership.personalTrainingPrice}
                      <span className={style.personal_info}>ГРН/МІС (12 ТРЕНУВАННЬ)</span>
                    </span>
                  </div>
                </div>
                <h2 className={style.workout}>
                  <GradientText>РАЗОВЕ </GradientText>
                  <span>ЗАНЯТТЯ</span>
                </h2>
                <div className={`${style.personal} ${style.workout_price}`}>
                  <span className={style.text}>ТРЕНАЖЕНРНИЙ ЗАЛ</span>
                  <span>
                  {membership.oneTimeTrainingPrice}
                    <span className={style.personal_info}>ГРН</span>
                  </span>
                </div>
            </div>
            <div className={style.right_wrap}>
              <div className={style.card}>
                <span>ПОСТІЙНИМ ВІДВІДУВАЧАМ</span>
                <span>ЗНИЖКА НА ВСІ АБОНЕМЕНТИ</span>
              </div>
              <span className={style.procent}>-15%</span>
              <span className={style.link} onClick={()=>{toBonuse()}}>Хто такий постійний відвідувач?</span>
            </div>
          </section>
        </div>
      </div>
      <div className={style.price_card_bcg}>
        <section className={style.price_card}>
          <article className={style.article_wrap}>
            <h2 className={`${style.title} ${style.article_title}`}>
              <GradientText>У ВАРТІСТЬ </GradientText>
              <span> АБОНЕМЕНТА ВХОДИТЬ:</span>
            </h2>
            <div className={style.text_wrap}>
              <span>- Навчання початківців з інструктором.</span>
              <span>- Програми для Жінок та Чоловіків (3 РІВНІ)
                <span className={style.level_link} onClick={() =>{toLevel();}}> Що таке 3 рівні програми тренувань?</span></span>
              <span>- Консультації по харчуванню.</span>
            </div>
            <div className={style.card_wrap}>
              {membership.listPrices.map(({id, month, workout, bonuse, value, freezing, afterDarkPrices, dailyPrices}) => {
                return (
                  <div key={id} className={style.card_price}>
                    <GradientText className={style.card_month}>{month}</GradientText>
                    <span className={style.card_workout}>{workout} занять</span>
                    <span className={style.card_bonus}>+БОНУС {bonuse} ЗАНЯТЬ</span>
                    <GradientText className={style.card_value}>{dailyPrices}/{afterDarkPrices}грн</GradientText>
                  <span className={style.card_freezing}>{freezing}</span>
              </div>
                )
              })}
            </div>

            <h2 className={`${style.title} ${style.article_title}`}>
              <GradientText>СИСТЕМА </GradientText> 
              <span>ЗАМОРОЗКИ АБОНЕМЕНТУ</span>
            </h2>
            <div id="bonuse" className={style.text_wrap}>
              <span>
              Мінімальна ,заморозка" 1 тиждень може бути продовжена при завчасному повідомленні до 2х тижднів. Якщо
              відповідного повідомлення не відбулося, ”ЗАМОРОЗКА” визначеним терміном являється закінченою і продовженню не підлягає. На один абонемент тільки одна ”ЗАМОРОЗКА”. На 50% оплату абонемента, ”ЗАМОРОЗКА” і резервне
              заняття не розповсюджується. По закінченню дії ”ЗАМОРОЗКИ”, кількість занять, що залишились відновлюються.
              Якщо відвідувач виявив бажання відвідувати тренування до закінчення терміну дії ”ЗАМОРОЗКИ”, оплата
              здійснюсться як разове відвідування.
              <span ref={bonuse}></span>
              </span>
            </div>
            <h2  className={`${style.title} ${style.article_title}`}>
              <GradientText>ЗНИЖКА </GradientText>
              <span>ДЛЯ ПОСТІЙНИХ КЛІЄНТІВ</span>
            </h2>
            <div className={style.text_wrap}>
              <span>
                 Надається особі, яка прозаймалась 9 місяців на протязі року (12 місяців). Знижка 15% надається на абонемент терміном на наступних 12 місяців. По закінченню дії терміну знижки, умови переглядаються знову.
                 <span ref={level}></span>
              </span>
            </div>

            <h2  className={`${style.title} ${style.article_title}`}>
              <GradientText>3 РІВНІ </GradientText>
              <span>ПРОГРАМИ ТРЕНУВАНЬ</span>
            </h2>
            <div className={style.text_wrap}>
              <span>
                Надається особі, яка прозаймалась 9 місяців на протязі року (12 місяців). Знижка 15% надається на абонемент терміном на наступних 12 місяців. По закінченню дії терміну знижки, умови переглядаються знову.
              </span>
            </div>
          </article>
        </section>
      </div>

      <section className={style.popular}> 
        <h2 className={`${style.title} ${style.popular_title}`}>
          <span>Найпоширеніші</span>
          <GradientText> запитання</GradientText>
        </h2>
        {question.map(({id, answer, question}) => {
          return (
            <FaqQuestion
              key={id}
              question={question}
              answer={answer}
            />
          )
        })}
      </section>
    </div>
  );
};

export default Membership;
