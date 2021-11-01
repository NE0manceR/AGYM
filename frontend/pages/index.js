import { useEffect, useState, useRef } from 'react';
import style from '../styles/modules/home.module.scss'
import TrialTrainingBtn from '../components/buttons/Trial-training-btn';
import SocialNetwork from "../components/Social-network";
import GradientText from '../components/Gradient-text';
import Clock from '../public/icon-svg/Clock-icon';
import CalendarIcon from '../public/icon-svg/Calendar-icon';
import MoreBtn from '../components/buttons/More-btn'
import FeedbackSlider from "../components/Feedback-slider";
import FeedbackSliderMob from "../components/Feedback-slider-mob";
import PhotoSlider from "../components/Photo-slider";
import PriceSlider from "../components/PriceSlider";
import TrialTrainingModal from "../components/Trial-training-modal";
import PlayVideo from "../components/Play-video";

const HomePage = ({homeData, mainPrices, feedbacks}) => {
  let [widthSlider, setWidthSlider] = useState()

  let [showTrainModal, setShowTrainModal] = useState(false);
  let [consultation, setConsultation] = useState(false)
  let numbers = useRef();
  let [ageNumber, setAgeNumber] = useState(0);
  let [market, setmarket] = useState(0);
  let [fat, setFat] = useState(0);
  let [exp, setExp] = useState(0);

  useEffect(()=>{
    setWidthSlider(window.innerWidth)
    window.addEventListener('scroll', numberAnimation);
    return () =>{
      window.removeEventListener('scroll', numberAnimation);
    }
  },[])

  function numberAnimation() {
       if (numbers.current.getBoundingClientRect().top < window.innerHeight) {
        window.removeEventListener('scroll', numberAnimation);

        let numerInterval = setInterval(() => {
          if (ageNumber  <= 18) {
            setAgeNumber(ageNumber++)
          } 

          if (fat <= 76) {
            setFat(fat += 4)
          }

          if (exp <= 25) {
            setExp(exp++)
          } 

          if (market  < 50) {
            setmarket(market += 2)
          } else {
            clearInterval(numerInterval)
          }

        },40);
    }
  }

  function showModalTrain(status) {
    setConsultation(status)
    setShowTrainModal(showTrainModal = !showTrainModal)
  }
  
  return (
    <div>
      <main className={style.home}>
        
        {showTrainModal ? 
        <TrialTrainingModal 
          closeWindow={()=>{showModalTrain();}}
          consultation={consultation}
          
        /> : '' }
        <section className={style.hero}>
          <PlayVideo
            className={style.hero__video}
            src={homeData?.video_url}
          />
          <h1 className={style.hero__title}>Тренуйся з нами по новому</h1>
          <article className={style.hero__text}>
            <span>Для нас не важливий  вік,  стать, освіта чи соціальний статус. Важливо, що ти зробив найголовніший крок - до свого здоров'я та  тіла своєї мрії</span>
            <span>Це не працює з понеділка, нового року чи після свят - найкращий час для змін - це зараз, найкращий день - це сьогодні</span>
            <span>А ми, як та сама чарівна таблетка, яку всі шукають - наші знання, досвід та реальний підхід до кожного, підкріплений твоїм бажанням та дисципліною - ось  ціна успіху.</span>
          </article>
          <div className={style.trial_btn_wrap}>
            <TrialTrainingBtn
              consultation
              funcAction={()=>{showModalTrain(false);}}
            
            >Пробне тренування</TrialTrainingBtn>
          </div>
          <div className={style.mobile_video}>

          </div>
          <SocialNetwork className={style.social_icons} />
        </section>

        <section className={style.facts}>
          <h2 className={`${style.facts__title} ${style.home__title}`}>
            Факти про <GradientText>AGYM</GradientText>
          </h2>
          <div ref={numbers} className={style.facts__info}>
            <div>
              <GradientText className={style.facts__number}>{ageNumber} років</GradientText>
              <span className={style.facts__name}>На ринку</span>
            </div>

            <div>
              <GradientText className={style.facts__number}> {">"}{market} ТИС</GradientText>
              <span className={style.facts__name}>Відвідувачів</span>
            </div>

            <div>
              <GradientText className={style.facts__number}>{fat} ТОН</GradientText>
              <span className={style.facts__name}>Спаленого жиру</span>
            </div>

            <div>
              <GradientText className={style.facts__number}>{exp} РОКІВ</GradientText>
              <span className={style.facts__name}>Досвіду тренерів</span>
            </div>
          </div>
        </section>

        <section className={style.time}>
          <article className={style.time__info}>
            <h2 className={`${style.home__title} ${style.time__title}`}>
              Ми прокачаємо<GradientText> кожного</GradientText>
            </h2>
            <span className={`${style.time__text} ${style.home__text}`}>Ми не накачаємо за тебе прес чи біцепси, але створимо усі умови, щоб це було зробити комфортно та екологічно.</span>
            <span className={style.time__text}>Легко не буде, але воно того варте.</span>
            <div className={style.time__subtitle}>
              <Clock className={style.clock_icon}></Clock>
              <span>ГОДИНИ РОБОТИ</span>
            </div>
            <div className={`${style.time__subtext_1}`}>
              <GradientText>З ПН-ПТ</GradientText>
              <GradientText>9:00-22:30</GradientText>
            </div>
            <div className={`${style.time__subtext_2}`}>
              <GradientText>СБ</GradientText>
              <GradientText>9:00-21:30</GradientText>
            </div>
            <div className={style.time__subtitle}>
              <CalendarIcon className={style.calendar_icon}></CalendarIcon>
              <span>ДНІ ВІДВІДУВАННЯ</span>
            </div>
            <div className={`${style.time__subtext_3}`}>
              <GradientText>Пн Ср Пт</GradientText>
              <GradientText className={style.text_line}> - </GradientText>
              <GradientText>Жіночі дні</GradientText>
            </div>
            <div className={`${style.time__subtext_4}`}>
              <GradientText>Вт Чт Сб</GradientText>
              <GradientText className={style.text_line}> - </GradientText>
              <GradientText>Чоловічі дні</GradientText>
            </div>
            <div className={style.time__train_btn}>
              <TrialTrainingBtn
                consultation
                funcAction={()=>{showModalTrain(false);}}
              
              >Пробне тренування</TrialTrainingBtn>
            </div>
          </article>
        </section>

        <section className={style.beginner}>
          <article>
            <h2 className={`${style.beginner__title} ${style.home__title}`}>
              Фітнес для<GradientText> початківців</GradientText>
            </h2>
            <article className={`${style.home__text} ${style.beginner__text}`}>
              <span>
                Відкинь вже той дешевий дофамін у вигляді: лежання на дивані після роботи, залипання в соцмережах чи поїдання чогось смачного. Вибери якісний спосіб нагороди для себе: спорт, сон, сміх.
              </span>
            </article>
            <div className={style.home__btn_wrap}>
              <TrialTrainingBtn
                consultation
                funcAction={()=>{showModalTrain(false);}}
              
              >Пробне тренування</TrialTrainingBtn>
              <MoreBtn link='training/newbie' />
            </div>
          </article>
        </section>

        <section className={style.training}>
          <article className={style.training__info}>
              <h2 className={`${style.beginner__title} ${style.home__title}`}>
                <GradientText>Персональні </GradientText> тренування
              </h2>
              <article className={`${style.home__text} ${style.training__text}`}>
                <span>
                  Хочеш мати те, чого ніколи не мав - роби те, чого раніше не робив
                </span>
                <span>
                Індивідуальний підхід - ось база персонального тренування. Усі твої болячки будуть враховані, усі навантаження - виважені.
                </span>
              </article>
              <div className={style.home__btn_wrap}>
                <TrialTrainingBtn
                  consultation
                  funcAction={()=>{showModalTrain(true);}}
                >Отримати консультацію</TrialTrainingBtn>
                <MoreBtn link='training/personal' />
              </div>
          </article>
        </section>

        <section className={style.program}>
          <article className={style.program__info}>
            <h2 className={`${style.beginner__title} ${style.home__title}`}>
              Розробка
              <GradientText> програми тренування</GradientText>
            </h2>

            <div className={style.home__text}>
              <ul>
                <li>Програми для збільшення м'язової маси тіла</li>
                <li>Програми для зменшення ваги тіла ( схуднення)</li>
                <li>Програми для шліфовки (жорсткого тонусу) м'язової маси</li>
                <li>Функціональні програми</li>
                <li>Аналіз та рекомендації по харчуванню</li>
              </ul>
            </div>
            <div className={`${style.home__btn_wrap} ${style.program__btn_wrap}`}>
              <TrialTrainingBtn
                link='training/program'
              >Замовити</TrialTrainingBtn>
              <MoreBtn link='training/training' />
            </div>
          </article>
        </section>

        <section className={style.eat}>
          <article className={style.eat__info}>
            <h2 className={`${style.eat__title} ${style.home__title}`}>
                Підбір системи
              <GradientText> харчування</GradientText>
            </h2>

            <span className={`${style.home__text} ${style.eat__text}`}>
            Розробка індивідуальної системи харчування, рекомендації щодо способу життя та звичок.
            </span>

            <div className={`${style.home__btn_wrap} ${style.eat__btn_wrap}`}>
              <MoreBtn link="training/nutrition" />
            </div>

          </article>
        </section>
      </main>
      {widthSlider < 500 ? <FeedbackSliderMob feedback={feedbacks} /> : <FeedbackSlider feedback={feedbacks} />}
      <PhotoSlider photos={homeData.gallery} />
      <PriceSlider mainPrices={mainPrices} />
      <div className={style.integrate}>
        <h2 className={`${style.integrate__title} ${style.home__title}`}>
        Інтегруй спорт<GradientText> у своє життя</GradientText>
        </h2>
        <TrialTrainingBtn
          consultation
          funcAction={()=>{showModalTrain();}}
        >
          Пробне тренування
        </TrialTrainingBtn>
      </div>
          
    </div>
  );
};



export default HomePage;
