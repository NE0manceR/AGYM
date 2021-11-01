import React, { useState, useEffect, useRef } from 'react';
import style from '../../styles/modules/nutrition.module.scss';
import Link from "next/link";
import Bread from "../../components/Bread";
import GradientText from "../../components/Gradient-text";
import TrialTrainingBtn from "../../components/buttons/Trial-training-btn";
import TrainGallery from "../../components/Train-gallery";
import ServicesSwitcher from "../../components/Services-Switcher";
import Arrow from "../../public/icon-svg/Drop-down-icon";
import PrimaryLowBtn from "../../components/buttons/Primary-low-btn";
import TrialTrainingModal from '../../components/Trial-training-modal';
import PlayVideo from "../../components/Play-video";


const Nutrition = ({nutrition, nutritionVideo}) => {
  let textMore = useRef(null);
  let textMoreWrap = useRef(null);
  let [activeText, setActiveText] = useState(false);

  let [showTrainModal, setShowTrainModal] = useState(false);
  let [consultation, setConsultation] = useState(false)

  function showModalTrain(status) {
    setConsultation(status)
    setShowTrainModal(showTrainModal = !showTrainModal)
  }

  function showMoreText() {
   
    if (!activeText) {
      textMoreWrap.current.style.height = `${textMore.current.clientHeight}px`;
    } else {
      textMoreWrap.current.style.height = `0`;
    }
    setActiveText((activeText = !activeText));
  }

  return (
    <div className={style.nutrition_bcg}>
          {showTrainModal ? 
          <TrialTrainingModal 
          closeWindow={()=>{showModalTrain();}}
          consultation={consultation}
          
        /> : '' }
      <div className={style.main}>
        <Bread className={style.crumbs}>
          <Link href='/'>Головна</Link>
          <Link href='/'> / Розробка програми харчування</Link>
        </Bread>

        <section className={style.main_content}>
          <PlayVideo
            className={style.nutri_video}
            src={nutritionVideo.video_url}
          />
          <div className={style.text_wrap}>
            <h2 className={style.title}>
              <span>Підбір системи</span>
              <GradientText className>харчування </GradientText>
            </h2>
            <span className={style.text}>
              Як продовжити активність та молодість? Почати правильно їсти та не
              боятися цього робити
            </span>
            <span className={style.text2}>
              Твоя система харчування буде формуватися на основі :
              <ul>
                <li>
                  <span>
                    Сучасних методиках зниження/набору/утримання ваги, наукових
                    дослідженнях
                  </span>
                </li>
                <li>
                  <span>
                    Завжди персоналізована, з врахуванням твого стану, аналізів
                    та генетики
                  </span>
                </li>
                <li>
                  <span>
                    Націлена на покращення якості твого життя та його здорового
                    продовженн
                  </span>
                </li>
              </ul>
            </span>
            <div className={style.btn_wrap}>
              <TrialTrainingBtn
                link={"#plan"}
                className={style.consultation_btn}
              >
                Обери свою систему харчування
              </TrialTrainingBtn>
              <span className={style.btn_text}>
                знижка на другий місяць 20%
              </span>
            </div>
            <div className={style.mobile_video}>
              <PlayVideo
                className={style.nutri_video_mobile}
                src={nutritionVideo.video_url}
              />
              <img
                className={style.main_bcg}
                src={"/services/nutrition.webp"}
                alt='img'
              />
            </div>
          </div>
          <div className={style.img_wrap}>
            <img
              className={style.main_bcg}
              src={"/services/nutrition.webp"}
              alt='img'
            />
          </div>
        </section>
        <span id="plan"></span>
      </div>
      <div className={style.price_bcg}>
        <div className={style.price}>
          <GradientText className={style.title}>Послуги</GradientText>
          <div className={style.card_wrap}>
            {nutrition.map(({id, title, price, fromYouList, howItWorksList, whatYouGetList}) => {
              return (
                <div key={id} className={style.card}>
                  <span className={style.card__title}>{title}</span>
                  {fromYouList[0].title === '+ ПОДАРУНОК' ? 
                    
                    <span className={style.card__description}><GradientText>{fromYouList[0].title}</GradientText></span>
                    :
                    <span className={style.card__description}>{fromYouList[0].title}</span>
                  }
                  <GradientText className={style.card__money}>{price} ГРН</GradientText>
                  <span className={style.card__hour}>{howItWorksList[0].title}</span>
              <PrimaryLowBtn 
                consultation
                showMore={()=>{showModalTrain(true);}}
                className={style.card__btn}>
                Записатись на консультацію
              </PrimaryLowBtn>
              <span className={style.card__what}>Що ти отримаєш:</span>
              <div className={style.card__info_wrap}>
                <div className={style.card__info}>
                  {whatYouGetList.map(({id, title}) => {
                    return (
                      <div key={id} className={style.card__item}>
                        <img src='/nutrition/check-box.png' alt='img' />
                        <span>{title}</span>
                      </div>
                    );
                  })}
                </div>
                <div className={style.card__footer}>
                  <GradientText className={style.card__money}>
                    {price} ГРН
                  </GradientText>
                  <span className={style.card__hour}>{howItWorksList[0].title}</span>
                  <PrimaryLowBtn
                    consultation
                    showMore={()=>{showModalTrain(true);}}
                    className={style.card__btn}>
                    Записатись на консультацію
                  </PrimaryLowBtn>
                </div>
              </div>
            </div>
              )
            })}
          </div>
        </div>
      </div>

      <section className={style.gallery}>
        <h2 className={style.title}>
          <span>Що ти будеш</span>
          <GradientText className> їсти</GradientText>
        </h2>
        <TrainGallery photos={nutritionVideo.galleries} ></TrainGallery>
      </section>

      <section className={style.from_you}>
        <div className={style.from_you__img}></div>
        <div className={style.from_you__text}>
          <h2 className={style.title}>
            <span>Від</span>
            <GradientText className> тебе </GradientText>
          </h2>
          <ul>
            <li>Чесно відповідаєш на запитання анкети</li>
            <li>Робиш антропологічні заміри та фото</li>
            <li>Ставиш цілі</li>
            <li>За бажанням здаєш аналізи</li>
            <li>Виконуєш рекомендації та насолоджуєшся результатом</li>
          </ul>
          <TrialTrainingBtn
            className={style.consultation_btn}
            link={"#plan"}
          >Обери свою систему харчування</TrialTrainingBtn>
        </div>
      </section>


      <section className={style.fallout_bcg}>
        <div className={style.fallout}>
          <h2 className={style.title}>
            <span>Наслідки </span>
            <GradientText>неправильного харчування </GradientText>
          </h2>
          <div className={style.fallout_img_bcg}>
            <div className={style.fallout_img}></div>
          </div>
        </div>
      </section>

      <div className={style.why__bcg}>
        <section className={style.why}>
          <img src='/nutrition/why.webp' alt='img' />
          <div className={style.wh_text}>
            <h2 className={style.title}>
              <span>чому </span>
              <GradientText className>це потрібно </GradientText>
            </h2>
            <span>Якщо у тебе не сформовані корисні звички харчування, то</span>
            <ul>
              <li>виникає тяга до певних видів продуктів</li>
              <li>ти постійно хочеш щось перекусити</li>
              <li>переїдаєш, хоча відчуваєш ситість</li>
              <li>не знаєш, як скласти збалансоване БЖУ меню</li>
              <li>хаотично вибираєш продукти</li>
              <li>не знаєш як правильно поєднати та приготувати продукти?</li>
            </ul>
            <span> Тоді нам точно по дорозі.</span>
            <TrialTrainingBtn link={"#plan"} className={style.consultation_btn}>
              Обери свою систему харчування
            </TrialTrainingBtn>
          </div>
        </section>
      </div>
      <section className={style.for_bcg}>
        <div className={style.for}>
          <div className={style.for_content}>
            <h2 className={style.title}>
              <span>для </span>
              <GradientText className>кого </GradientText>
            </h2>
            <ul>
              <li>
                Якщо ти хочеш розбиратися в їжі та зрозуміти, як це працює
              </li>
              <li>Не бути голодним, не боятися їсти</li>
              <li>Визначати свої норми БЖУ та бути сам собі дієтологом</li>
              <li>Отримати підтримку, мотивацію та допомогу</li>
              <li>Мати можливість отримати відповіді на усі свої запитання</li>
              <li>Підтримати, покращити здоров’я та ресурсність організму</li>
            </ul>
            <TrialTrainingBtn link={"#plan"} className={style.consultation_btn}>
              Обери свою систему харчування
            </TrialTrainingBtn>
          </div>
        </div>
      </section>
      <img
        className={style.mobile_bcg}
        src='/nutrition/for-bcg.png'
        alt='img'
      />
      <section className={style.time_bcg}>
        <div className={style.time_content}>
          <div className={style.time_text_wrap}>
            <span className={style.title}>Час змін настав</span>
            <span className={style.text_text}>
              Перестань відкладати все на потім, бо на справді ми не справи
              відкладаємо, а своє життя Запам’ятай: кращий час – зараз, кращий
              день – сьогодні Можна так і не дочекатися, того самого ідеального
              дня.
            </span>
            <Link href={"#plan"}>
              <a className={style.black_btn}>Обери свою систему харчування</a>
            </Link>
          </div>
          <img
            className={style.time_img}
            src='/nutrition/time-bcg.webp'
            alt='img'
          />
        </div>
      </section>

      <section className={style.your_nutrition}>
        <h2 className={`${style.title} ${style.title_nutrition}`}>
          <span>ВАШ </span>
          <GradientText className>НУТРІЦІОЛОГ </GradientText>
        </h2>
        <div className={style.nutrition_content}>
          <img src='/nutrition/nutrition.webp' alt='img' />
          <div className={style.nutrition_content_text}>
            <span className={style.name}>МАЙКО ІРИНА</span>
            <span className={style.prof}>Нутріціолог ф/к “Аgym”</span>
            <span className={style.nutri_text}>
              Послуги: індивідуальні консультації та тренінги для компаній
              <br></br>
              <br></br>
              Більше 20 років жила ресторанним бізнесом, керуючи різними
              ресторанами Львова. Завжди хотілося, щоб люди від їжі отримували
              не тільки енергію, а ще і якість, комфорт, задоволення, радість.
              <br></br>
              <br></br>
              Мене завжди приваблювала тема їжі, її походження, традиції різних
              країн, поєднання продуктів та їх кращі методи приготування.
            </span>
            <div ref={textMoreWrap} className={style.more_text_wrap}>
              <span ref={textMore} className={style.more_text}>
                Як хобі - сміливо можу назвати кулінарію та сам процес
                приготування. Це для мене, як антистрес, деколи цілий квест та
                безмежний простір для фантазій та експериментів.
                <br></br>
                <br></br>З часом виявилось, що не все так просто у формуванні
                правильної та збалансованої тарілки. Ми часто їмо достатньо по
                калоріях, а наш організм не доїдає – просто голодує - по
                мікроеленетах, вітамінах, органічних кислотах, мінералах,
                клітковині. Не правильне поєднання тих чи інших продуктів – не
                дає повноцінно засвоїтися вітамінам та мікроелементам. Методи
                приготування – також важливі, бо на чому смажити, скільки та як
                варити – принципові питання. Від цього виникають дефіцити та
                такі симптоми, як - Зайва вага або її брак - Хронічна втома -
                Алергії - Проблеми з кишківником та слабкий імунітет
                <br></br>
                <br></br>
                Знання в області продуктів, технологій приготування їжі,
                сезонності та локальності – здобуті досвідом та підтвердженні
                практикою. Навчалась в Школі здоров’я Катерини Толстікової,
                Першій Школі Біохакінгу Я навчу тебе як правильно та
                збалансовано харчуватись, прокачати звички та змінити погляд на
                життя та їжу, без голоду та стресу!!!
              </span>
            </div>

            <div
              onClick={() => {
                showMoreText();
              }}
              className={`${style.more} ${activeText ? style.more_active : ""}`}
            >
              {activeText ? 'Менше' : 'Більше'}
              <Arrow />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nutrition;
